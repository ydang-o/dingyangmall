package com.dingyangmall.mall.dto;

import lombok.Data;
import java.io.Serializable;

/**
 * 积分红包传输对象
 */
@Data
public class IntegralPacketDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    /**
     * 接收方手机号
     */
    private String phone;

    /**
     * 积分数量
     */
    private Integer amount;

    /**
     * 短信验证码
     */
    private String code;
}
