package com.dingyangmall.web.api;

import com.dingyangmall.common.core.domain.AjaxResult;
import com.dingyangmall.common.utils.StringUtils;
import com.dingyangmall.mall.entity.TbCouponInfo;
import com.dingyangmall.mall.service.TbCouponInfoService;
import com.dingyangmall.mall.utils.MemberUtils;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * C端优惠券接口
 *
 * @author dingyangmall
 * @date 2026-02-13
 */
@RestController
@RequestMapping("/app/coupon")
@AllArgsConstructor
public class AppCouponApi {

    private final TbCouponInfoService couponInfoService;

    /**
     * 获取我的优惠券列表
     * @param status 状态：1-未使用 2-已使用 3-已过期 (不传查所有)
     */
    @GetMapping("/my")
    public AjaxResult getMyCoupons(@RequestParam(required = false) Integer status) {
        String memberIdStr = MemberUtils.getMemberId();
        if (StringUtils.isEmpty(memberIdStr)) {
            return AjaxResult.error("未登录");
        }
        
        try {
            Long memberId = Long.parseLong(memberIdStr);
            List<TbCouponInfo> list = couponInfoService.getUserCoupons(memberId, status);
            return AjaxResult.success(list);
        } catch (NumberFormatException e) {
            return AjaxResult.error("无效的用户ID");
        }
    }
}
