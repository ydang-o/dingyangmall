package com.dingyangmall.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dingyangmall.mall.entity.TbIntegralRule;

/**
 * 积分规则 服务类
 *
 * @author dingyangmall
 * @date 2026-02-12
 */
public interface TbIntegralRuleService extends IService<TbIntegralRule> {

    /**
     * 发放注册积分
     * @param userId 用户ID
     */
    void distributeRegisterPoints(Long userId);

    /**
     * 发放推荐积分
     * @param userId 被推荐人ID
     * @param inviterId 推荐人ID
     */
    void distributeInvitePoints(Long userId, Long inviterId);

    /**
     * 发放签到积分
     * @param userId 用户ID
     * @return true: 签到成功, false: 今日已签到或无规则
     */
    boolean distributeSignInPoints(Long userId);
}
