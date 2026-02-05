package com.dingyangmall.web.controller.system;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.dingyangmall.common.core.domain.AjaxResult;
import com.dingyangmall.mall.entity.OrderInfo;
import com.dingyangmall.mall.mapper.TbIntegralFlowMapper;
import com.dingyangmall.mall.service.OrderInfoService;
import com.dingyangmall.system.service.ISysUserService;
import com.dingyangmall.weixin.service.WxUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.HashMap;
import java.util.Map;

/**
 * 首页统计仪表盘
 *
 * @author dingyangmall
 */
@RestController
@RequestMapping("/system/dashboard")
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class DashboardController {

    private final ISysUserService sysUserService;
    private final WxUserService wxUserService;
    private final OrderInfoService orderInfoService;
    private final TbIntegralFlowMapper integralFlowMapper;

    /**
     * 获取首页统计数据
     */
    @GetMapping("/data")
    public AjaxResult getDashboardData() {
        Map<String, Object> data = new HashMap<>();

        // 1. 用户总数 (系统用户 + 微信用户)
        // 注意：SysUser包含管理员和经销商，WxUser包含终端客户
        // 这里简单相加，实际业务可能需要去重或区分
        long sysUserCount = sysUserService.selectUserList(null).size(); // 这是一个简化的写法，实际应该用count
        long wxUserCount = wxUserService.count();
        data.put("userCount", sysUserCount + wxUserCount);

        // 2. 平台积分发放总量 (operType = 1)
        Long pointsIssued = integralFlowMapper.selectSumByOperType(1);
        data.put("pointsIssued", pointsIssued != null ? pointsIssued : 0);

        // 3. 待发货订单 (status = 1)
        long pendingOrders = orderInfoService.count(Wrappers.<OrderInfo>lambdaQuery()
                .eq(OrderInfo::getStatus, "1"));
        data.put("pendingOrders", pendingOrders);

        // 4. 今日核销 (status = 3 已完成 且 更新时间为今日)
        // 假设核销/完成操作更新了 updateTime
        LocalDateTime startOfDay = LocalDateTime.of(LocalDate.now(), LocalTime.MIN);
        long todayWriteOffs = orderInfoService.count(Wrappers.<OrderInfo>lambdaQuery()
                .eq(OrderInfo::getStatus, "3")
                .ge(OrderInfo::getUpdateTime, startOfDay));
        data.put("todayWriteOffs", todayWriteOffs);

        return AjaxResult.success(data);
    }
}
