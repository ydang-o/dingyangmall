package com.dingyangmall.framework.web.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import com.dingyangmall.common.constant.CacheConstants;
import com.dingyangmall.common.constant.Constants;
import com.dingyangmall.common.constant.UserConstants;
import com.dingyangmall.common.core.domain.entity.SysUser;
import com.dingyangmall.common.core.domain.model.RegisterBody;
import com.dingyangmall.common.core.redis.RedisCache;
import com.dingyangmall.common.exception.user.CaptchaException;
import com.dingyangmall.common.exception.user.CaptchaExpireException;
import com.dingyangmall.common.utils.MessageUtils;
import com.dingyangmall.common.utils.SecurityUtils;
import com.dingyangmall.common.utils.StringUtils;
import com.dingyangmall.framework.manager.AsyncManager;
import com.dingyangmall.framework.manager.factory.AsyncFactory;
import com.dingyangmall.system.service.ISysConfigService;
import com.dingyangmall.system.service.ISysUserService;

/**
 * 注册校验方法
 * 
 * @author ruoyi
 */
@Component
public class SysRegisterService
{
    @Autowired
    private ISysUserService userService;

    @Autowired
    private ISysConfigService configService;

    @Autowired
    private RedisCache redisCache;

    @Autowired
    private SmsService smsService;

    /**
     * 注册分销商
     */
    public String registerDistributor(RegisterBody registerBody)
    {
        String msg = "", username = registerBody.getUsername(), password = registerBody.getPassword();
        String phonenumber = registerBody.getPhonenumber();
        String smsCode = registerBody.getSmsCode();
        String inviteCode = registerBody.getInviteCode();

        // 验证短信验证码
        if (StringUtils.isNotEmpty(phonenumber) && StringUtils.isNotEmpty(smsCode)) {
            smsService.validateSmsCode(phonenumber, smsCode);
        } else {
            return "手机号和验证码不能为空";
        }

        SysUser sysUser = new SysUser();
        sysUser.setUserName(username);
        sysUser.setPhonenumber(phonenumber);
        sysUser.setNickName(username);

        if (StringUtils.isEmpty(username))
        {
            msg = "用户名不能为空";
        }
        else if (StringUtils.isEmpty(password))
        {
            msg = "用户密码不能为空";
        }
        else if (username.length() < UserConstants.USERNAME_MIN_LENGTH
                || username.length() > UserConstants.USERNAME_MAX_LENGTH)
        {
            msg = "账户长度必须在2到20个字符之间";
        }
        else if (password.length() < UserConstants.PASSWORD_MIN_LENGTH
                || password.length() > UserConstants.PASSWORD_MAX_LENGTH)
        {
            msg = "密码长度必须在5到20个字符之间";
        }
        else if (!userService.checkUserNameUnique(sysUser))
        {
            msg = "保存用户'" + username + "'失败，注册账号已存在";
        }
        else if (!userService.checkPhoneUnique(sysUser))
        {
            msg = "保存用户'" + username + "'失败，手机号码已存在";
        }
        else
        {
            sysUser.setPassword(SecurityUtils.encryptPassword(password));
            
            // 处理分销商层级
            if (StringUtils.isNotEmpty(inviteCode)) {
                try {
                    Long parentId = Long.parseLong(inviteCode);
                    SysUser parent = userService.selectUserById(parentId);
                    if (parent != null && Integer.valueOf(1).equals(parent.getDealerLevel())) {
                        sysUser.setDealerLevel(2);
                        sysUser.setParentDistributorId(parent.getUserId());
                    } else {
                        return "无效的邀请码（上级分销商不存在或非一级分销商）";
                    }
                } catch (NumberFormatException e) {
                     return "无效的邀请码格式";
                }
            } else {
                sysUser.setDealerLevel(1);
            }
            
            // 注册用户 (insertUser会处理角色，但这里我们需要先设置角色)
            // 假设默认分销商角色ID，这里需要确认ID。如果不知道，暂时不设置角色，或者设为普通角色
            // sysUser.setRoleIds(new Long[]{2L}); 
            
            int rows = userService.insertUser(sysUser);
            if (rows <= 0)
            {
                msg = "注册失败,请联系系统管理人员";
            }
            else
            {
                AsyncManager.me().execute(AsyncFactory.recordLogininfor(username, Constants.REGISTER, MessageUtils.message("user.register.success")));
            }
        }
        return msg;
    }

    /**
     * 注册
     */
    public String register(RegisterBody registerBody)
    {
        String msg = "", username = registerBody.getUsername(), password = registerBody.getPassword();
        SysUser sysUser = new SysUser();
        sysUser.setUserName(username);

        // 验证码开关
        boolean captchaEnabled = configService.selectCaptchaEnabled();
        if (captchaEnabled)
        {
            validateCaptcha(username, registerBody.getCode(), registerBody.getUuid());
        }

        if (StringUtils.isEmpty(username))
        {
            msg = "用户名不能为空";
        }
        else if (StringUtils.isEmpty(password))
        {
            msg = "用户密码不能为空";
        }
        else if (username.length() < UserConstants.USERNAME_MIN_LENGTH
                || username.length() > UserConstants.USERNAME_MAX_LENGTH)
        {
            msg = "账户长度必须在2到20个字符之间";
        }
        else if (password.length() < UserConstants.PASSWORD_MIN_LENGTH
                || password.length() > UserConstants.PASSWORD_MAX_LENGTH)
        {
            msg = "密码长度必须在5到20个字符之间";
        }
        else if (!userService.checkUserNameUnique(sysUser))
        {
            msg = "保存用户'" + username + "'失败，注册账号已存在";
        }
        else
        {
            sysUser.setNickName(username);
            sysUser.setPassword(SecurityUtils.encryptPassword(password));
            boolean regFlag = userService.registerUser(sysUser);
            if (!regFlag)
            {
                msg = "注册失败,请联系系统管理人员";
            }
            else
            {
                AsyncManager.me().execute(AsyncFactory.recordLogininfor(username, Constants.REGISTER, MessageUtils.message("user.register.success")));
            }
        }
        return msg;
    }

    /**
     * 校验验证码
     * 
     * @param username 用户名
     * @param code 验证码
     * @param uuid 唯一标识
     * @return 结果
     */
    public void validateCaptcha(String username, String code, String uuid)
    {
        String verifyKey = CacheConstants.CAPTCHA_CODE_KEY + StringUtils.nvl(uuid, "");
        String captcha = redisCache.getCacheObject(verifyKey);
        redisCache.deleteObject(verifyKey);
        if (captcha == null)
        {
            throw new CaptchaExpireException();
        }
        if (!code.equalsIgnoreCase(captcha))
        {
            throw new CaptchaException();
        }
    }
}

