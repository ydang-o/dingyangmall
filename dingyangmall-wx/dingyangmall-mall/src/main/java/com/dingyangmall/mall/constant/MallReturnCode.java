package com.dingyangmall.mall.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MallReturnCode {
    ERR_70001(70001, "只有未支付订单能取消"),
    ERR_70005(70005, "订单不存在");

    private final int code;
    private final String msg;
}
