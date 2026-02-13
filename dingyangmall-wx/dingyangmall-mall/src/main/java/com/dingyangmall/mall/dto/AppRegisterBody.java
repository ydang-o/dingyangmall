package com.dingyangmall.mall.dto;

import lombok.Data;

/**
 * C端用户注册对象
 *
 * @author dingyangmall
 */
@Data
public class AppRegisterBody {
    /**
     * 手机号
     */
    private String phone;

    /**
     * 密码
     */
    private String password;

    /**
     * 短信验证码
     */
    private String code;

    /**
     * 邀请码（可选）
     */
    private String inviteCode;
}
