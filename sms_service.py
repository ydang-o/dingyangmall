from __future__ import annotations

import hashlib
import hmac
import secrets
import time
from dataclasses import dataclass
from datetime import datetime
from urllib.parse import quote
from urllib.parse import urlencode
from urllib.parse import urlparse

import httpx

from app.config import settings


@dataclass
class SmsSendResult:
    success: bool
    provider_message_id: str | None
    provider_raw: dict
    local_code: str | None
    error: str | None = None


def normalize_cn_phone(raw_phone: str) -> str:
    phone = raw_phone.strip().replace(" ", "")
    if phone.startswith("+86"):
        phone = phone[3:]
    elif phone.startswith("86") and len(phone) == 13:
        phone = phone[2:]
    if settings.sms_cn_only:
        if len(phone) != 11 or not phone.startswith("1") or not phone.isdigit():
            raise ValueError("仅支持中国大陆手机号")
        return f"+86{phone}"
    return raw_phone.strip()


async def send_verify_code(phone: str, scene: str) -> SmsSendResult:
    payload = {
        "SmsAccount": settings.volc_sms_account,
        "Sign": settings.volc_sms_sign,
        "TemplateID": settings.volc_sms_template_id,
        "PhoneNumber": phone,
        "Scene": scene,
        "CodeType": settings.sms_code_type,
        "ExpireTime": settings.sms_expire_seconds,
        "TryCount": settings.sms_try_count,
    }

    # 优先尝试火山验证码接口；若未配 AK/SK 则退化为本地验证码（便于开发调试）。
    if settings.volc_sms_ak and settings.volc_sms_sk:
        params = {
            "Action": settings.volc_sms_action_send,
            "Version": settings.volc_sms_version,
        }
        url = f"{settings.volc_sms_endpoint}?{urlencode(params)}"
        signed_headers = _build_volc_headers("POST", url=url, params=params, body=payload)
        try:
            async with httpx.AsyncClient(timeout=settings.request_timeout_seconds) as client:
                resp = await client.post(url, json=payload, headers=signed_headers)
            resp.raise_for_status()
            data = resp.json()
            if not isinstance(data, dict):
                return SmsSendResult(
                    success=False,
                    provider_message_id=None,
                    provider_raw={},
                    local_code=None,
                    error="短信发送失败: 响应格式错误",
                )
            err = (((data.get("ResponseMetadata") or {}).get("Error")) or {})
            if isinstance(err, dict) and err:
                return SmsSendResult(
                    success=False,
                    provider_message_id=None,
                    provider_raw=data,
                    local_code=None,
                    error=f"短信发送失败: {err.get('Code', 'UnknownError')} - {err.get('Message', '')}",
                )
            msg_ids = (((data or {}).get("Result") or {}).get("MessageID")) or []
            msg_id = msg_ids[0] if isinstance(msg_ids, list) and msg_ids else None
            if not msg_id:
                return SmsSendResult(
                    success=False,
                    provider_message_id=None,
                    provider_raw=data,
                    local_code=None,
                    error="短信发送失败: 未返回 MessageID",
                )
            return SmsSendResult(
                success=True,
                provider_message_id=str(msg_id) if msg_id else None,
                provider_raw=data,
                local_code=None,
            )
        except Exception as exc:
            return SmsSendResult(
                success=False,
                provider_message_id=None,
                provider_raw={},
                local_code=None,
                error=f"短信发送失败: {exc}",
            )

    local_code = "".join(secrets.choice("0123456789") for _ in range(settings.sms_code_type))
    return SmsSendResult(
        success=True,
        provider_message_id=None,
        provider_raw={"mode": "local_fallback"},
        local_code=local_code,
    )


async def check_verify_code(phone: str, scene: str, code: str) -> tuple[bool, dict]:
    if not (settings.volc_sms_ak and settings.volc_sms_sk):
        return False, {"error": "volc ak/sk not configured"}
    payload = {
        "SmsAccount": settings.volc_sms_account,
        "PhoneNumber": phone,
        "Scene": scene,
        "Code": code,
    }
    params = {
        "Action": settings.volc_sms_action_check,
        "Version": settings.volc_sms_version,
    }
    url = f"{settings.volc_sms_endpoint}?{urlencode(params)}"
    signed_headers = _build_volc_headers("POST", url=url, params=params, body=payload)
    try:
        async with httpx.AsyncClient(timeout=settings.request_timeout_seconds) as client:
            resp = await client.post(url, json=payload, headers=signed_headers)
        resp.raise_for_status()
        data = resp.json()
        if not isinstance(data, dict):
            return False, {"error": "invalid response format"}
        err = (((data.get("ResponseMetadata") or {}).get("Error")) or {})
        if isinstance(err, dict) and err:
            return False, data
        # 火山引擎 CheckSmsVerifyCode 的 Result 是字符串：
        #   "0" = 成功；"1" = 验证码错误；"2" = 已过期/超次数
        result_str = str(data.get("Result") or "")
        return result_str == "0", data if isinstance(data, dict) else {}
    except Exception as exc:
        return False, {"error": str(exc)}


def hash_sms_code(code: str) -> str:
    return hashlib.sha256(f"{code}|{settings.jwt_secret}".encode("utf-8")).hexdigest()


def verify_sms_code_hash(code: str, expected_hash: str) -> bool:
    got = hash_sms_code(code)
    return hmac.compare_digest(got, expected_hash)


def expires_epoch(seconds: int) -> int:
    return int(time.time()) + seconds


def _build_volc_headers(
    method: str,
    url: str,
    params: dict[str, str],
    body: dict,
) -> dict[str, str]:
    """
    轻量 V4 签名，避免额外 SDK 依赖。
    """
    body_text = httpx.Request(method, "http://unused", json=body).content.decode("utf-8")
    body_hash = hashlib.sha256(body_text.encode("utf-8")).hexdigest()
    x_date = datetime.utcnow().strftime("%Y%m%dT%H%M%SZ")
    short_date = x_date[:8]
    service = "volcSMS"
    region = "cn-north-1"
    credential_scope = f"{short_date}/{region}/{service}/request"
    parsed = urlparse(url)
    host = parsed.netloc or "sms.volcengineapi.com"
    canonical_query = "&".join(
        f"{quote(str(k), safe='-_.~')}={quote(str(params[k]), safe='-_.~')}"
        for k in sorted(params.keys())
    )
    canonical = "\n".join(
        [
            method.upper(),
            "/",
            canonical_query,
            f"content-type:application/json\nhost:{host}\nx-content-sha256:{body_hash}\nx-date:{x_date}\n",
            "content-type;host;x-content-sha256;x-date",
            body_hash,
        ]
    )
    canonical_hash = hashlib.sha256(canonical.encode("utf-8")).hexdigest()
    string_to_sign = "\n".join(["HMAC-SHA256", x_date, credential_scope, canonical_hash])

    k_date = hmac.new(settings.volc_sms_sk.encode("utf-8"), short_date.encode("utf-8"), hashlib.sha256).digest()
    k_region = hmac.new(k_date, region.encode("utf-8"), hashlib.sha256).digest()
    k_service = hmac.new(k_region, service.encode("utf-8"), hashlib.sha256).digest()
    k_signing = hmac.new(k_service, b"request", hashlib.sha256).digest()
    signature = hmac.new(k_signing, string_to_sign.encode("utf-8"), hashlib.sha256).hexdigest()
    auth = (
        f"HMAC-SHA256 Credential={settings.volc_sms_ak}/{credential_scope}, "
        f"SignedHeaders=content-type;host;x-content-sha256;x-date, Signature={signature}"
    )
    return {
        "Host": host,
        "Content-Type": "application/json",
        "X-Date": x_date,
        "X-Content-Sha256": body_hash,
        "Authorization": auth,
    }
