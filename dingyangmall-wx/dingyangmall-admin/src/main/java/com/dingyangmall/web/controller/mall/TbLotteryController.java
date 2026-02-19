package com.dingyangmall.web.controller.mall;

import com.baomidou.mybatisplus.core.toolkit.Wrappers;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.dingyangmall.common.core.controller.BaseController;
import com.dingyangmall.common.core.domain.AjaxResult;
import com.dingyangmall.common.core.page.TableDataInfo;
import com.dingyangmall.common.constant.HttpStatus;
import com.dingyangmall.mall.entity.TbLotteryConfig;
import com.dingyangmall.mall.entity.TbLotteryRecord;
import com.dingyangmall.mall.service.TbLotteryConfigService;
import com.dingyangmall.mall.service.TbLotteryRecordService;
import lombok.AllArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

/**
 * 抽奖管理 Controller
 *
 * @author dingyangmall
 * @date 2026-02-13
 */
@RestController
@AllArgsConstructor
@RequestMapping("/mall/lottery")
public class TbLotteryController extends BaseController {

    private final TbLotteryConfigService lotteryConfigService;
    private final TbLotteryRecordService lotteryRecordService;

    /**
     * 获取当前抽奖配置
     * @return 抽奖配置
     */
    @GetMapping("/config")
    @PreAuthorize("@ss.hasPermi('mall:lottery:config')")
    public AjaxResult getConfig() {
        TbLotteryConfig config = lotteryConfigService.getActiveConfig();
        if (config == null) {
            // 如果没有配置，返回空对象或默认对象
            config = new TbLotteryConfig();
            config.setStatus("0"); // 默认关闭
        }
        return AjaxResult.success(config);
    }

    /**
     * 保存抽奖配置
     * @param config 抽奖配置
     * @return 结果
     */
    @PostMapping("/config")
    @PreAuthorize("@ss.hasPermi('mall:lottery:config')")
    public AjaxResult saveConfig(@RequestBody TbLotteryConfig config) {
        return toAjax(lotteryConfigService.saveConfig(config));
    }

    /**
     * 分页查询抽奖记录
     * @param page 分页对象
     * @param tbLotteryRecord 抽奖记录查询条件
     * @return 抽奖记录列表
     */
    @GetMapping("/record/page")
    @PreAuthorize("@ss.hasPermi('mall:lottery:record')")
    public TableDataInfo getRecordPage(Page page, TbLotteryRecord tbLotteryRecord) {
        com.baomidou.mybatisplus.core.metadata.IPage<TbLotteryRecord> result = lotteryRecordService.page(page, Wrappers.query(tbLotteryRecord).lambda().orderByDesc(TbLotteryRecord::getCreateTime));
        TableDataInfo rspData = new TableDataInfo();
        rspData.setCode(HttpStatus.SUCCESS);
        rspData.setMsg("查询成功");
        rspData.setRows(result.getRecords());
        rspData.setTotal(result.getTotal());
        return rspData;
    }
}
