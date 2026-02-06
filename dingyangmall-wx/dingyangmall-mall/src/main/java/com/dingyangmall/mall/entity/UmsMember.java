package com.dingyangmall.mall.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import com.baomidou.mybatisplus.extension.activerecord.Model;
import com.dingyangmall.common.annotation.Excel;
import lombok.Data;
import lombok.EqualsAndHashCode;
import java.math.BigDecimal;
import java.time.LocalDateTime;

/**
 * 会员用户
 *
 * @author www.dingyangmall.com
 */
@Data
@TableName("ums_member")
@EqualsAndHashCode(callSuper = true)
public class UmsMember extends Model<UmsMember> {
    private static final long serialVersionUID = 1L;

    @TableId(type = IdType.ASSIGN_ID)
    private String id;

    @Excel(name = "昵称")
    private String nickname;

    @Excel(name = "真实姓名")
    private String realName;

    @Excel(name = "手机号")
    private String phone;

    @Excel(name = "身份类型")
    private String identityType;

    @Excel(name = "会员码")
    private String memberCode;

    @Excel(name = "积分")
    private Integer points;

    @Excel(name = "余额")
    private BigDecimal balance;

    @Excel(name = "等级")
    private Integer level;

    @Excel(name = "头像")
    private String avatar;

    @Excel(name = "创建时间")
    private LocalDateTime createTime;

    @Excel(name = "更新时间")
    private LocalDateTime updateTime;
    
    @Excel(name = "逻辑删除标记")
    private String delFlag;
}
