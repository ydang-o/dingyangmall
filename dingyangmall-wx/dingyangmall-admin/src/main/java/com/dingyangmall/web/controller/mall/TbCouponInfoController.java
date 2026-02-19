package com.dingyangmall.web.controller.mall;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dingyangmall.common.core.controller.BaseController;
import com.dingyangmall.common.core.domain.AjaxResult;
import com.dingyangmall.common.core.page.TableDataInfo;
import com.dingyangmall.common.constant.HttpStatus;
import com.dingyangmall.mall.entity.TbCouponInfo;
import com.dingyangmall.mall.service.TbCouponInfoService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

/**
 * 商品券管理
 *
 * @author dingyangmall
 * @date 2026-02-12
 */
@RestController
@AllArgsConstructor
@RequestMapping("/mall/coupon")
public class TbCouponInfoController extends BaseController {

    private final TbCouponInfoService couponInfoService;

    /**
     * 分页查询
     * @param page 分页对象
     * @param tbCouponInfo 商品券信息
     * @return
     */
    @GetMapping("/page")
    @PreAuthorize("@ss.hasPermi('mall:coupon:index')")
    public TableDataInfo getPage(Page page, TbCouponInfo tbCouponInfo) {
        com.baomidou.mybatisplus.core.metadata.IPage<TbCouponInfo> result = couponInfoService.page(page, Wrappers.query(tbCouponInfo).lambda().orderByDesc(TbCouponInfo::getCreateTime));
        TableDataInfo rspData = new TableDataInfo();
        rspData.setCode(HttpStatus.SUCCESS);
        rspData.setMsg("查询成功");
        rspData.setRows(result.getRecords());
        rspData.setTotal(result.getTotal());
        return rspData;
    }

    /**
     * 通过id查询商品券信息
     * @param id id
     * @return AjaxResult
     */
    @GetMapping("/{id}")
    @PreAuthorize("@ss.hasPermi('mall:coupon:get')")
    public AjaxResult getById(@PathVariable("id") Long id) {
        return AjaxResult.success(couponInfoService.getById(id));
    }

    /**
     * 新增商品券信息 (通常由系统自动生成，但也可手动添加)
     * @param tbCouponInfo 商品券信息
     * @return AjaxResult
     */
    @PostMapping
    @PreAuthorize("@ss.hasPermi('mall:coupon:add')")
    public AjaxResult save(@RequestBody TbCouponInfo tbCouponInfo) {
        return toAjax(couponInfoService.save(tbCouponInfo));
    }

    /**
     * 修改商品券信息
     * @param tbCouponInfo 商品券信息
     * @return AjaxResult
     */
    @PutMapping
    @PreAuthorize("@ss.hasPermi('mall:coupon:edit')")
    public AjaxResult update(@RequestBody TbCouponInfo tbCouponInfo) {
        return toAjax(couponInfoService.updateById(tbCouponInfo));
    }

    /**
     * 通过id删除商品券信息
     * @param id id
     * @return AjaxResult
     */
    @DeleteMapping("/{id}")
    @PreAuthorize("@ss.hasPermi('mall:coupon:del')")
    public AjaxResult removeById(@PathVariable Long id) {
        return toAjax(couponInfoService.removeById(id));
    }

}