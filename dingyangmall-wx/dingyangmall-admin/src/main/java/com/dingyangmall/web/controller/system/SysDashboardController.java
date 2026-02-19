package com.dingyangmall.web.controller.system;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.dingyangmall.common.core.domain.AjaxResult;
import com.dingyangmall.mall.entity.OrderInfo;
import com.dingyangmall.mall.entity.TbCouponInfo;
import com.dingyangmall.mall.entity.TbIntegralFlow;
import com.dingyangmall.mall.enums.OrderInfoEnum;
import com.dingyangmall.mall.service.OrderInfoService;
import com.dingyangmall.mall.service.TbCouponInfoService;
import com.dingyangmall.mall.service.TbIntegralFlowService;
import com.dingyangmall.mall.service.UmsMemberService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

/**
 * 首页仪表盘
 */
@RestController
@AllArgsConstructor
@RequestMapping("/system/dashboard")
public class SysDashboardController {

    private final UmsMemberService umsMemberService;
    private final OrderInfoService orderInfoService;
    private final TbCouponInfoService tbCouponInfoService;
    private final TbIntegralFlowService tbIntegralFlowService;

    @GetMapping("/data")
    public AjaxResult getData() {
        Map<String, Object> data = new HashMap<>();

        // 1. 用户总数
        data.put("userCount", umsMemberService.count());

        // 2. 平台积分发放总量 (这里简单统计所有增加的流水)
        // 注意：这里假设 integralNum > 0 即为发放。如果数据量大，应该使用 SQL sum
        data.put("pointsIssued", tbIntegralFlowService.count(Wrappers.<TbIntegralFlow>lambdaQuery().gt(TbIntegralFlow::getIntegralNum, 0)));

        // 3. 待发货订单
        data.put("pendingOrders", orderInfoService.count(Wrappers.<OrderInfo>lambdaQuery()
                .eq(OrderInfo::getStatus, OrderInfoEnum.STATUS_1.getValue()))); // STATUS_1 is 待发货?
        
        // 4. 今日核销
        LocalDateTime startOfDay = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);
        LocalDateTime endOfDay = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
        data.put("todayWriteOffs", tbCouponInfoService.count(Wrappers.<TbCouponInfo>lambdaQuery()
                .eq(TbCouponInfo::getCouponStatus, 2) // 2: 已使用
                .ge(TbCouponInfo::getUpdateTime, startOfDay)
                .le(TbCouponInfo::getUpdateTime, endOfDay)));

        return AjaxResult.success(data);
    }
}
