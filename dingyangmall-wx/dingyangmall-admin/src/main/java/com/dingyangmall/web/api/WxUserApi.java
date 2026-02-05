/**
 * Copyright (C) 2018-2019
 * All rights reserved, Designed By www.dingyangmall.com
 */
package com.dingyangmall.web.api;

import com.dingyangmall.common.core.domain.AjaxResult;
import com.dingyangmall.weixin.entity.LoginMaDTO;
import com.dingyangmall.weixin.entity.WxOpenDataDTO;
import com.dingyangmall.weixin.entity.WxUser;
import com.dingyangmall.weixin.service.WxUserService;
import com.dingyangmall.weixin.utils.ThirdSessionHolder;
import com.dingyangmall.weixin.utils.WxMaUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

/**
 * 微信用户
 *
 * @author www.dingyangmall.com
 * @date 2019-08-25 15:39:39
 */
@Slf4j
@RestController
@AllArgsConstructor
@RequestMapping("/weixin/api/ma/wxuser")
public class WxUserApi {

	private final WxUserService wxUserService;
	/**
	 * 小程序用户登录
	 * @param request
	 * @param loginMaDTO
	 * @return
	 */
	@PostMapping("/login")
	public AjaxResult login(HttpServletRequest request, @RequestBody LoginMaDTO loginMaDTO){
		try {
			WxUser wxUser = wxUserService.loginMa(WxMaUtil.getAppId(request),loginMaDTO.getJsCode());
			return AjaxResult.success(wxUser);
		} catch (Exception e) {
			e.printStackTrace();
			return AjaxResult.error(e.getMessage());
		}
	}

	/**
	 * 获取用户信息
	 * @param
	 * @return
	 */
	@GetMapping
	public AjaxResult get(){
		String id = ThirdSessionHolder.getThirdSession().getWxUserId();
		return AjaxResult.success(wxUserService.getById(id));
	}

	/**
	 * 保存用户信息
	 * @param wxOpenDataDTO
	 * @return
	 */
	@PostMapping
	public AjaxResult saveOrUptateWxUser(@RequestBody WxOpenDataDTO wxOpenDataDTO){
		wxOpenDataDTO.setAppId(ThirdSessionHolder.getThirdSession().getAppId());
		wxOpenDataDTO.setUserId(ThirdSessionHolder.getThirdSession().getWxUserId());
		wxOpenDataDTO.setSessionKey(ThirdSessionHolder.getThirdSession().getSessionKey());
		WxUser wxUser = wxUserService.saveOrUptateWxUser(wxOpenDataDTO);
		return AjaxResult.success(wxUser);
	}
}

