package com.dingyangmall.common.core.domain.model;

/**
 * 用户注册对象
 * 
 * @author ruoyi
 */
public class RegisterBody extends LoginBody
{
    /**
     * 手机号
     */
    private String phonenumber;

    /**
     * 短信验证码
     */
    private String smsCode;

    /**
     * 邀请码
     */
    private String inviteCode;

    public String getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(String phonenumber) {
        this.phonenumber = phonenumber;
    }

    public String getSmsCode() {
        return smsCode;
    }

    public void setSmsCode(String smsCode) {
        this.smsCode = smsCode;
    }

    public String getInviteCode() {
        return inviteCode;
    }

    public void setInviteCode(String inviteCode) {
        this.inviteCode = inviteCode;
    }
}
