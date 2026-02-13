package com.dingyangmall.mall.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

/**
 * 商品券信息
 *
 * @author dingyangmall
 * @date 2026-02-12
 */
@Data
@TableName("tb_coupon_info")
@EqualsAndHashCode(callSuper = true)
public class TbCouponInfo extends Model<TbCouponInfo> {
    private static final long serialVersionUID = 1L;

    /**
     * 主键-券ID
     */
    @TableId(type = IdType.AUTO)
    private Long id;

    /**
     * 商品券码-16位字母数字混合-唯一
     */
    private String couponCode;

    /**
     * 持有用户ID-终端客户
     */
    private Long userId;

    /**
     * 关联商品ID
     */
    private String goodsId;

    /**
     * 商品名称-冗余
     */
    private String goodsName;

    /**
     * 商品图片-冗余
     */
    private String goodsPic;

    /**
     * 兑换积分价格-冗余
     */
    private Integer integralPrice;

    /**
     * 券有效期开始时间
     */
    private LocalDateTime validityStart;

    /**
     * 券有效期结束时间
     */
    private LocalDateTime validityEnd;

    /**
     * 券状态：1-未使用 2-已使用 3-已过期
     */
    private Integer couponStatus;

    /**
     * 核销时间
     */
    private LocalDateTime verifyTime;

    /**
     * 核销经销商ID-核销后填充
     */
    private Long verifyDealerId;

    /**
     * 核销经销商名称-冗余
     */
    private String verifyDealerName;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 更新时间
     */
    private LocalDateTime updateTime;

    /**
     * 创建人-用户ID
     */
    private String createBy;
}
