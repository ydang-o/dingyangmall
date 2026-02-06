package com.dingyangmall.mall.utils;

import com.dingyangmall.common.utils.ServletUtils;
import com.dingyangmall.common.utils.StringUtils;

import jakarta.servlet.http.HttpServletRequest;

public class MemberUtils {
    
    /**
     * 获取当前登录会员ID
     * 优先从Header中获取 member-id
     * 否则返回默认测试ID "1"
     */
    public static String getMemberId() {
        try {
            HttpServletRequest request = ServletUtils.getRequest();
            String memberId = request.getHeader("member-id");
            if (StringUtils.isNotEmpty(memberId)) {
                return memberId;
            }
        } catch (Exception e) {
            // ignore
        }
        // TODO: Implement proper security context retrieval once Member Login is fully implemented
        return "1";
    }
}
