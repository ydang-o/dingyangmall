package com.dingyangmall.mall.service.impl;

import cn.hutool.core.util.RandomUtil;
import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dingyangmall.mall.entity.UmsMember;
import com.dingyangmall.mall.mapper.UmsMemberMapper;
import com.dingyangmall.mall.service.UmsMemberService;
import org.springframework.stereotype.Service;
import com.dingyangmall.common.utils.StringUtils;

@Service
public class UmsMemberServiceImpl extends ServiceImpl<UmsMemberMapper, UmsMember> implements UmsMemberService {

    @Override
    public UmsMember getByMemberCode(String memberCode) {
        return getOne(Wrappers.<UmsMember>lambdaQuery().eq(UmsMember::getMemberCode, memberCode));
    }

    @Override
    public UmsMember getByPhone(String phone) {
        return getOne(Wrappers.<UmsMember>lambdaQuery().eq(UmsMember::getPhone, phone));
    }

    @Override
    public boolean save(UmsMember entity) {
        if (StringUtils.isEmpty(entity.getMemberCode())) {
            entity.setMemberCode(generateMemberCode());
        }
        return super.save(entity);
    }

    private String generateMemberCode() {
        // Generate 10-digit numeric code to avoid collision
        String code = RandomUtil.randomNumbers(10);
        // Ensure uniqueness
        while (count(Wrappers.<UmsMember>lambdaQuery().eq(UmsMember::getMemberCode, code)) > 0) {
            code = RandomUtil.randomNumbers(10);
        }
        return code;
    }
}
