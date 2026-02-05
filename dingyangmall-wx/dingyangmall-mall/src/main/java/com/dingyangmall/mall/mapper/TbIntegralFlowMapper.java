package com.dingyangmall.mall.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.dingyangmall.mall.entity.TbIntegralFlow;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import java.math.BigDecimal;

/**
 * 积分流水 Mapper 接口
 *
 * @author dingyangmall
 * @date 2026-02-05
 */
@Mapper
public interface TbIntegralFlowMapper extends BaseMapper<TbIntegralFlow> {

    /**
     * 根据操作类型统计积分总数
     * @param operType 操作类型
     * @return 积分总和
     */
    @Select("SELECT IFNULL(SUM(integral_num), 0) FROM tb_integral_flow WHERE oper_type = #{operType} AND del_flag = 0")
    Long selectSumByOperType(@Param("operType") Integer operType);
}
