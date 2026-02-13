package com.dingyangmall.framework.web.service;

import com.dingyangmall.common.constant.CacheConstants;
import com.dingyangmall.common.core.redis.RedisCache;
import com.dingyangmall.common.exception.user.CaptchaException;
import com.dingyangmall.common.exception.user.CaptchaExpireException;
import com.dingyangmall.common.utils.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import java.util.concurrent.TimeUnit;

/**
 * 短信服务类
 *
 * @author dingyangmall
 */
@Component
public class SmsService {

    @Autowired
    private RedisCache redisCache;

    // 模拟发送短信，实际项目中请对接阿里云/腾讯云等短信服务
    public void sendSmsCode(String phone) {
        // 生成6位随机验证码
        String code = String.valueOf((int) ((Math.random() * 9 + 1) * 100000));
        
        // 存储到Redis，有效期5分钟
        String key = CacheConstants.SMS_CODE_KEY + phone;
        redisCache.setCacheObject(key, code, 5, TimeUnit.MINUTES);
        
        // 打印到控制台，模拟发送
        System.out.println("【模拟短信】发送给 " + phone + " 的验证码是：" + code);
    }

    /**
     * 校验短信验证码
     *
     * @param phone 手机号
     * @param code 验证码
     */
    public void validateSmsCode(String phone, String code) {
        String key = CacheConstants.SMS_CODE_KEY + phone;
        String captcha = redisCache.getCacheObject(key);
        
        if (captcha == null) {
            throw new CaptchaExpireException();
        }
        if (!code.equals(captcha)) {
            throw new CaptchaException();
        }
        // 验证成功后删除验证码
        redisCache.deleteObject(key);
    }
}
