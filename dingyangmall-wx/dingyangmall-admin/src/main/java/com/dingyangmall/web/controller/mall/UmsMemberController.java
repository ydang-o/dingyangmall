package com.dingyangmall.web.controller.mall;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dingyangmall.common.core.controller.BaseController;
import com.dingyangmall.common.core.domain.R;
import com.dingyangmall.mall.entity.UmsMember;
import com.dingyangmall.mall.service.UmsMemberService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping("/mall/member")
public class UmsMemberController extends BaseController {

    private final UmsMemberService umsMemberService;

    @GetMapping("/page")
    @PreAuthorize("@ss.hasPermi('mall:member:index')")
    public R getPage(Page page, UmsMember umsMember) {
        return R.ok(umsMemberService.page(page, Wrappers.query(umsMember)));
    }

    @GetMapping("/{id}")
    @PreAuthorize("@ss.hasPermi('mall:member:get')")
    public R getById(@PathVariable("id") String id) {
        return R.ok(umsMemberService.getById(id));
    }

    @PostMapping
    @PreAuthorize("@ss.hasPermi('mall:member:add')")
    public R save(@RequestBody UmsMember umsMember) {
        return R.ok(umsMemberService.save(umsMember));
    }

    @PutMapping
    @PreAuthorize("@ss.hasPermi('mall:member:edit')")
    public R update(@RequestBody UmsMember umsMember) {
        return R.ok(umsMemberService.updateById(umsMember));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("@ss.hasPermi('mall:member:del')")
    public R remove(@PathVariable("id") String id) {
        return R.ok(umsMemberService.removeById(id));
    }
}
