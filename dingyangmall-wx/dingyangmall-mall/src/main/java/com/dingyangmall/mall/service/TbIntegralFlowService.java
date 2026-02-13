package com.dingyangmall.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dingyangmall.mall.entity.TbIntegralFlow;

/**
 * 积分流水 服务类
 *
 * @author dingyangmall
 * @date 2026-02-12
 */
public interface TbIntegralFlowService extends IService<TbIntegralFlow> {

    /**
     * 增加积分（含流水记录）
     * @param userId 用户ID
     * @param points 积分数（正数增加，负数扣减）
     * @param type 类型
     * @param remark 备注
     */
    void addPoints(Long userId, Integer points, Integer type, String remark);
}
