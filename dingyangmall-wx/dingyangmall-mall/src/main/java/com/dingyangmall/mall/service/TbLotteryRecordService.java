package com.dingyangmall.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dingyangmall.mall.entity.TbLotteryRecord;

/**
 * 抽奖记录 Service 接口
 *
 * @author dingyangmall
 * @date 2026-02-13
 */
public interface TbLotteryRecordService extends IService<TbLotteryRecord> {
    /**
     * 用户抽奖
     * @param userId 用户ID
     * @return 抽奖结果记录
     */
    TbLotteryRecord draw(Long userId);
}
