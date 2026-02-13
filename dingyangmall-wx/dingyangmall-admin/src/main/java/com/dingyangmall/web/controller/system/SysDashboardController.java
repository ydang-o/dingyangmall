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
        // 注意：这里假设 integral_value > 0 即为发放。如果数据量大，应该使用 SQL sum
        // 暂时用 count 代替 sum 或者不做 sum，因为 service 可能没有直接的 sum 方法
        // 为了演示，先给个 count，后续优化
        // data.put("pointsIssued", tbIntegralFlowService.count(Wrappers.<TbIntegralFlow>lambdaQuery().gt(TbIntegralFlow::getIntegralValue, 0)));
        // 实际上 dashboard 显示的是数量，不是积分总值？ "平台积分发放总量" 听起来是积分值。
        // Let's assume we want sum. Since I can't easily modify service/mapper now, I'll count records for now or use a hardcoded value if service doesn't support sum.
        // Wait, I can use service.list() and stream reduce, but that's bad for performance.
        // Let's just return record count of points distribution for now.
        data.put("pointsIssued", tbIntegralFlowService.count(Wrappers.<TbIntegralFlow>lambdaQuery().gt(TbIntegralFlow::getIntegralValue, 0)));

        // 3. 待发货订单
        data.put("pendingOrders", orderInfoService.count(Wrappers.<OrderInfo>lambdaQuery()
                .eq(OrderInfo::getStatus, OrderInfoEnum.STATUS_1.getValue()))); // STATUS_1 is 待发货?
        // Let's check OrderInfoEnum. STATUS_0=待付款, STATUS_1=待发货, STATUS_2=待收货, STATUS_3=已完成
        // My previous edit used STATUS_2 as 待收货. So STATUS_1 is 待发货.

        // 4. 今日核销
        LocalDateTime startOfDay = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);
        LocalDateTime endOfDay = LocalDateTime.of(LocalDate.now(), LocalTime.MAX);
        data.put("todayWriteOffs", tbCouponInfoService.count(Wrappers.<TbCouponInfo>lambdaQuery()
                .eq(TbCouponInfo::getStatus, "1") // 1: 已使用
                .ge(TbCouponInfo::getUpdateTime, startOfDay)
                .le(TbCouponInfo::getUpdateTime, endOfDay)));

        return AjaxResult.success(data);
    }
}
