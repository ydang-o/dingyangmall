package com.dingyangmall.mall.constant;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum MallReturnCode {
    ERR_70001(70001, "只有未支付订单能取消"),
    ERR_70002(70002, "积分余额不足"),
    ERR_70003(70003, "用户不存在"),
    ERR_70004(70004, "商品券无效或已使用"),
    ERR_70005(70005, "订单不存在"),
    ERR_70006(70006, "无权进行此操作");

    private final int code;
    private final String msg;
}
