package com.dingyangmall.mall.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.dingyangmall.mall.entity.UmsMember;

public interface UmsMemberService extends IService<UmsMember> {
    
    /**
     * 根据会员码获取会员
     * @param memberCode 会员码
     * @return 会员对象
     */
    UmsMember getByMemberCode(String memberCode);
}
