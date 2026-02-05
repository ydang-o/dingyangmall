package com.dingyangmall.mall.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.LocalDateTime;

/**
 * 积分流水
 *
 * @author dingyangmall
 * @date 2026-02-05
 */
@Data
@TableName("tb_integral_flow")
@EqualsAndHashCode(callSuper = true)
public class TbIntegralFlow extends Model<TbIntegralFlow> {
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
     * 操作类型（1:平台分发 2:上级赠送 3:首充赠送 4:注册赠送 5:每日签到 6:推荐注册 7:积分红包 8:抽奖获得）
     */
    private Integer operType;

    /**
     * 积分数量
     */
    private Integer integralNum;

    /**
     * 来源用户ID
     */
    private Long sourceUserId;

    /**
     * 业务ID
     */
    private String businessId;

    /**
     * 备注
     */
    private String remark;

    /**
     * 操作时间
     */
    private LocalDateTime operTime;

    /**
     * 创建时间
     */
    private LocalDateTime createTime;

    /**
     * 创建人
     */
    private String createBy;

    /**
     * 删除标记
     */
    private Integer delFlag;
}
