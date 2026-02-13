package com.dingyangmall.web.controller.common;

import com.dingyangmall.common.core.controller.BaseController;
import com.dingyangmall.common.core.domain.AjaxResult;
import com.dingyangmall.framework.web.service.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * 短信服务控制器
 *
 * @author dingyangmall
 */
@RestController
@RequestMapping("/common/sms")
public class SmsController extends BaseController {

    @Autowired
    private SmsService smsService;

    /**
     * 发送短信验证码
     *
     * @param phone 手机号
     * @return 结果
     */
    @GetMapping("/send")
    public AjaxResult sendSmsCode(@RequestParam("phone") String phone) {
        if (phone == null || phone.length() != 11) {
            return AjaxResult.error("手机号格式不正确");
        }
        smsService.sendSmsCode(phone);
        return AjaxResult.success("验证码发送成功");
    }
}
