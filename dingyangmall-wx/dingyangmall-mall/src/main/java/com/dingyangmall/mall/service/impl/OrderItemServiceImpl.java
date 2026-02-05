/**
 * Copyright (C) 2018-2019
 * All rights reserved, Designed By www.dingyangmall.com
 * 注意：
 * 本软件为www.dingyangmall.com开发研制，项目使用请保留此说明
 */
package com.dingyangmall.mall.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.dingyangmall.mall.entity.OrderItem;
import com.dingyangmall.mall.mapper.OrderItemMapper;
import com.dingyangmall.mall.service.OrderItemService;
import org.springframework.stereotype.Service;

/**
 * 商城订单详情
 *
 * @author www.dingyangmall.com
 * @date 2019-09-10 15:31:40
 */
@Service
public class OrderItemServiceImpl extends ServiceImpl<OrderItemMapper, OrderItem> implements OrderItemService {

}

