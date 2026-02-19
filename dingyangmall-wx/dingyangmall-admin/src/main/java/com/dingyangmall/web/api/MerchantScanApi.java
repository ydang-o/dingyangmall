package com.dingyangmall.web.api;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.dingyangmall.common.core.domain.AjaxResult;
import com.dingyangmall.common.core.domain.entity.SysUser;
import com.dingyangmall.common.utils.SecurityUtils;
import com.dingyangmall.mall.entity.TbCouponInfo;
import com.dingyangmall.mall.entity.UmsMember;
import com.dingyangmall.mall.service.TbCouponInfoService;
import com.dingyangmall.mall.service.TbIntegralFlowService;
import com.dingyangmall.mall.service.UmsMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

/**
 * 商家端扫码接口
 */
@RestController
@RequestMapping("/api/mall/merchant/scan")
public class MerchantScanApi {

    @Autowired
    private UmsMemberService umsMemberService;

    @Autowired
    private TbIntegralFlowService integralFlowService;

    @Autowired
    private TbCouponInfoService couponInfoService;

    /**
     * 识别用户 (扫会员码)
     * @param memberCode 会员码
     */
    @GetMapping("/user/{memberCode}")
    public AjaxResult identifyUser(@PathVariable String memberCode) {
        UmsMember member = umsMemberService.getByMemberCode(memberCode);
        if (member == null) {
            member = umsMemberService.getByPhone(memberCode);
        }
        
        if (member == null) {
            return AjaxResult.error("无效的会员码或手机号");
        }
        
        Map<String, Object> result = new HashMap<>();
        result.put("userId", member.getId());
        result.put("nickname", member.getNickname());
        result.put("phone", member.getPhone());
        result.put("points", member.getPoints());
        result.put("level", member.getLevel());
        
        return AjaxResult.success(result);
    }

    /**
     * 商家赠送积分
     */
    @PostMapping("/points")
    public AjaxResult givePoints(@RequestBody Map<String, Object> body) {
        String memberCode = (String) body.get("memberCode");
        Integer points = (Integer) body.get("points");
        
        if (points == null || points <= 0) {
            return AjaxResult.error("积分数量必须大于0");
        }
        
        UmsMember member = umsMemberService.getByMemberCode(memberCode);
        if (member == null) {
            member = umsMemberService.getByPhone(memberCode);
        }
        
        if (member == null) {
            return AjaxResult.error("无效的会员码或手机号");
        }
        
        // 获取当前操作的商家信息
        SysUser dealer = SecurityUtils.getLoginUser().getUser();
        String remark = "商家[" + dealer.getNickName() + "]扫码赠送";
        
        // 赠送积分 (类型2: 上级赠送)
        integralFlowService.addPoints(member.getId(), points, 2, remark);
        
        return AjaxResult.success("赠送成功");
    }

    /**
     * 核销商品券 (扫券码)
     */
    @PostMapping("/coupon/verify")
    public AjaxResult verifyCoupon(@RequestBody Map<String, String> body) {
        String couponCode = body.get("couponCode");
        
        TbCouponInfo coupon = couponInfoService.getValidCouponByCode(couponCode);
        if (coupon == null) {
            return AjaxResult.error("无效或已过期的商品券");
        }
        
        // 获取当前操作的商家信息
        SysUser dealer = SecurityUtils.getLoginUser().getUser();
        
        boolean success = couponInfoService.verifyCoupon(coupon.getId(), dealer.getUserId(), dealer.getNickName());
        if (success) {
            return AjaxResult.success("核销成功");
        } else {
            return AjaxResult.error("核销失败");
        }
    }
}
