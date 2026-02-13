package com.dingyangmall.mall.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

/**
 * 抽奖奖品
 *
 * @author dingyangmall
 * @date 2026-02-13
 */
@Data
@TableName("tb_lottery_prize")
@EqualsAndHashCode(callSuper = true)
public class TbLotteryPrize extends Model<TbLotteryPrize> {
    private static final long serialVersionUID = 1L;

    /**
     * ID
     */
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * 配置ID
     */
    private Long configId;

    /**
     * 奖品类型（0：实物/虚拟商品；1：积分）
     */
    private String prizeType;

    /**
     * 关联商品ID（当类型为0时）
     */
    private String goodsId;

    /**
     * 积分数量（当类型为1时）
     */
    private Integer pointAmount;

    /**
     * 奖品名称（冗余字段，方便展示）
     */
    private String prizeName;

    /**
     * 奖品图片（冗余字段）
     */
    private String prizePic;

    /**
     * 中奖概率（百分比，如 10.5 代表 10.5%）
     */
    private Double probability;

    /**
     * 排序号
     */
    private Integer sortOrder;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;
}
