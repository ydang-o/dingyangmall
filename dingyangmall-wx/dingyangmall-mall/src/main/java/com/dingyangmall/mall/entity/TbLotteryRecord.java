package com.dingyangmall.mall.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

/**
 * 抽奖记录
 *
 * @author dingyangmall
 * @date 2026-02-13
 */
@Data
@TableName("tb_lottery_record")
@EqualsAndHashCode(callSuper = true)
public class TbLotteryRecord extends Model<TbLotteryRecord> {
    private static final long serialVersionUID = 1L;

    /**
     * ID
     */
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * 用户ID
     */
    private Long userId;

    /**
     * 是否中奖（0：未中奖；1：已中奖）
     */
    private String isWin;

    /**
     * 奖品ID
     */
    private Long prizeId;

    /**
     * 奖品名称
     */
    private String prizeName;

    /**
     * 奖品类型（0：实物/虚拟商品；1：积分）
     */
    private String prizeType;

    /**
     * 消耗积分
     */
    private Integer costPoints;

    /**
     * 发放状态（0：待发放；1：已发放）
     * 积分直接发放，商品生成订单，优惠券生成券码
     */
    private String grantStatus;

    /**
     * 关联业务ID（如订单ID、优惠券ID）
     */
    private String businessId;

    /**
     * 抽奖时间
     */
    private LocalDateTime createTime;
}
