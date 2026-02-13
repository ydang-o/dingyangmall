package com.dingyangmall.mall.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 抽奖配置
 *
 * @author dingyangmall
 * @date 2026-02-13
 */
@Data
@TableName("tb_lottery_config")
@EqualsAndHashCode(callSuper = true)
public class TbLotteryConfig extends Model<TbLotteryConfig> {
    private static final long serialVersionUID = 1L;

    /**
     * ID
     */
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * 状态（0：关闭；1：开启）
     */
    private String status;

    /**
     * 单次抽奖消耗积分
     */
    private Integer costPoints;

    /**
     * 每日抽奖次数上限
     */
    private Integer dailyLimit;

    /**
     * 未中奖概率（百分比，如 20.5 代表 20.5%）
     */
    private Double noPrizeProbability;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    private LocalDateTime updateTime;

    /**
     * 创建人
     */
    private String createBy;

    /**
     * 更新人
     */
    private String updateBy;

    /**
     * 奖品列表
     */
    @TableField(exist = false)
    private List<TbLotteryPrize> prizeList;
}
