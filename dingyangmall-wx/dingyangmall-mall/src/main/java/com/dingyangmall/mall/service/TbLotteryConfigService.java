package com.dingyangmall.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dingyangmall.mall.entity.TbLotteryConfig;

/**
 * 抽奖配置 Service 接口
 *
 * @author dingyangmall
 * @date 2026-02-13
 */
public interface TbLotteryConfigService extends IService<TbLotteryConfig> {
    /**
     * 获取当前生效的抽奖配置（包含奖品列表）
     * @return 抽奖配置
     */
    TbLotteryConfig getActiveConfig();

    /**
     * 保存抽奖配置及其奖品
     * @param config 抽奖配置
     * @return 是否成功
     */
    boolean saveConfig(TbLotteryConfig config);
}
