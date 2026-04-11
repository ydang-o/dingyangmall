-- ================================================
-- 定阳商城 - 完整数据库初始化脚本
-- 版本: 1.0.0
-- 日期: 2026-04-09
-- 说明: 一键创建所有表结构和初始数据
-- ================================================

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- 创建数据库
-- ----------------------------
DROP DATABASE IF EXISTS `dingyangmall_ry`;
CREATE DATABASE `dingyangmall_ry` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `dingyangmall_ry`;

-- ================================================
-- 第一部分：系统基础表（若依框架）
-- ================================================

-- ----------------------------
-- 1. 代码生成业务表
-- ----------------------------
DROP TABLE IF EXISTS `gen_table`;
CREATE TABLE `gen_table` (
  `table_id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `table_name` varchar(200) DEFAULT '' COMMENT '表名称',
  `table_comment` varchar(500) DEFAULT '' COMMENT '表描述',
  `sub_table_name` varchar(64) DEFAULT NULL COMMENT '关联子表的表名',
  `sub_table_fk_name` varchar(64) DEFAULT NULL COMMENT '子表关联的外键名',
  `class_name` varchar(100) DEFAULT '' COMMENT '实体类名称',
  `tpl_category` varchar(200) DEFAULT 'crud' COMMENT '使用的模板',
  `tpl_web_type` varchar(30) DEFAULT '' COMMENT '前端模板类型',
  `package_name` varchar(100) DEFAULT NULL COMMENT '生成包路径',
  `module_name` varchar(30) DEFAULT NULL COMMENT '生成模块名',
  `business_name` varchar(30) DEFAULT NULL COMMENT '生成业务名',
  `function_name` varchar(50) DEFAULT NULL COMMENT '生成功能名',
  `function_author` varchar(50) DEFAULT NULL COMMENT '生成功能作者',
  `gen_type` char(1) DEFAULT '0' COMMENT '生成代码方式',
  `gen_path` varchar(200) DEFAULT '/' COMMENT '生成路径',
  `options` varchar(1000) DEFAULT NULL COMMENT '其它生成选项',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`table_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='代码生成业务表';

DROP TABLE IF EXISTS `gen_table_column`;
CREATE TABLE `gen_table_column` (
  `column_id` bigint NOT NULL AUTO_INCREMENT COMMENT '编号',
  `table_id` bigint DEFAULT NULL COMMENT '归属表编号',
  `column_name` varchar(200) DEFAULT NULL COMMENT '列名称',
  `column_comment` varchar(500) DEFAULT NULL COMMENT '列描述',
  `column_type` varchar(100) DEFAULT NULL COMMENT '列类型',
  `java_type` varchar(500) DEFAULT NULL COMMENT 'JAVA类型',
  `java_field` varchar(200) DEFAULT NULL COMMENT 'JAVA字段名',
  `is_pk` char(1) DEFAULT NULL COMMENT '是否主键',
  `is_increment` char(1) DEFAULT NULL COMMENT '是否自增',
  `is_required` char(1) DEFAULT NULL COMMENT '是否必填',
  `is_insert` char(1) DEFAULT NULL COMMENT '是否为插入字段',
  `is_edit` char(1) DEFAULT NULL COMMENT '是否编辑字段',
  `is_list` char(1) DEFAULT NULL COMMENT '是否列表字段',
  `is_query` char(1) DEFAULT NULL COMMENT '是否查询字段',
  `query_type` varchar(200) DEFAULT 'EQ' COMMENT '查询方式',
  `html_type` varchar(200) DEFAULT NULL COMMENT '显示类型',
  `dict_type` varchar(200) DEFAULT '' COMMENT '字典类型',
  `sort` int DEFAULT NULL COMMENT '排序',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`column_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='代码生成业务表字段';

-- ----------------------------
-- 2. 商品分类表
-- ----------------------------
DROP TABLE IF EXISTS `goods_category`;
CREATE TABLE `goods_category` (
  `id` varchar(32) NOT NULL COMMENT 'PK',
  `enable` char(2) NOT NULL COMMENT '是否启用（1：开启；0：关闭）',
  `parent_id` varchar(32) DEFAULT NULL COMMENT '父分类编号',
  `name` varchar(16) DEFAULT NULL COMMENT '名称',
  `description` varchar(255) DEFAULT NULL COMMENT '描述',
  `pic_url` varchar(255) DEFAULT NULL COMMENT '图片',
  `sort` smallint DEFAULT NULL COMMENT '排序',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后更新时间',
  `del_flag` char(2) DEFAULT '0' COMMENT '逻辑删除标记（0：显示；1：隐藏）',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='分类表';

INSERT INTO `goods_category` (`id`, `enable`, `parent_id`, `name`, `description`, `pic_url`, `sort`, `del_flag`) VALUES
('1','1','0','热门推荐','','/static/images/category/hot.png',1,'0'),
('2','1','0','手机数码','','/static/images/category/phone.png',2,'0'),
('3','1','0','服饰鞋包','','/static/images/category/clothes.png',3,'0'),
('4','1','0','电脑办公','','/static/images/category/computer.png',4,'0');

-- ----------------------------
-- 3. 商品表
-- ----------------------------
DROP TABLE IF EXISTS `goods_spu`;
CREATE TABLE `goods_spu` (
  `id` varchar(32) NOT NULL COMMENT 'PK',
  `spu_code` varchar(32) DEFAULT NULL COMMENT 'spu编码',
  `name` varchar(200) NOT NULL DEFAULT '' COMMENT 'spu名字',
  `sell_point` varchar(500) NOT NULL DEFAULT '' COMMENT '卖点',
  `description` text NOT NULL COMMENT '描述',
  `category_first` varchar(32) NOT NULL COMMENT '一级分类ID',
  `category_second` varchar(32) DEFAULT NULL COMMENT '二级分类ID',
  `pic_urls` varchar(1024) NOT NULL DEFAULT '' COMMENT '商品图片',
  `shelf` char(2) NOT NULL DEFAULT '0' COMMENT '是否上架（1是 0否）',
  `sort` int NOT NULL DEFAULT '0' COMMENT '排序字段',
  `sales_price` decimal(10,2) DEFAULT NULL COMMENT '销售价格',
  `market_price` decimal(10,2) DEFAULT NULL COMMENT '市场价',
  `cost_price` decimal(10,2) DEFAULT NULL COMMENT '成本价',
  `stock` int NOT NULL DEFAULT '0' COMMENT '库存',
  `sale_num` int DEFAULT '0' COMMENT '销量',
  `goods_type` char(2) DEFAULT '1' COMMENT '商品类型（1普通商品 2积分商品）',
  `integral_price` int DEFAULT '0' COMMENT '积分兑换价格',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后更新时间',
  `del_flag` char(2) NOT NULL DEFAULT '0' COMMENT '逻辑删除标记（0：显示；1：隐藏）',
  `version` int DEFAULT '0' COMMENT '版本号',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品表';

INSERT INTO `goods_spu` (`id`, `name`, `sell_point`, `description`, `category_first`, `pic_urls`, `shelf`, `sort`, `sales_price`, `market_price`, `cost_price`, `stock`, `sale_num`, `goods_type`, `integral_price`) VALUES
('G001','iPhone 15 Pro','旗舰手机 性能强劲','<p>iPhone 15 Pro 256GB 深空黑</p>','2','["/static/images/goods/iphone15.jpg"]','1',1,7999.00,8999.00,5000.00,100,10,'1',0),
('G002','小米手机 14','性价比旗舰','<p>小米14 12+256GB</p>','2','["/static/images/goods/xiaomi14.jpg"]','1',2,3999.00,4499.00,2500.00,200,50,'1',0),
('G003','积分兑换券-50元','可兑换50元代金券','<p>积分商城专属代金券</p>','1','["/static/images/goods/coupon50.png"]','1',0,0,0,0,0,2,500);

-- ----------------------------
-- 4. 订单表
-- ----------------------------
DROP TABLE IF EXISTS `order_info`;
CREATE TABLE `order_info` (
  `id` varchar(32) NOT NULL COMMENT 'PK',
  `del_flag` char(2) NOT NULL DEFAULT '0' COMMENT '逻辑删除标记',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后更新时间',
  `user_id` varchar(32) NOT NULL COMMENT '用户id',
  `order_no` varchar(50) NOT NULL COMMENT '订单单号',
  `payment_way` char(2) NOT NULL COMMENT '支付方式1、货到付款；2、在线支付',
  `is_pay` char(2) NOT NULL COMMENT '是否支付0、未支付 1、已支付',
  `name` varchar(255) DEFAULT NULL COMMENT '订单名',
  `status` char(2) DEFAULT NULL COMMENT '订单状态1、待发货 2、待收货 3、确认收货/已完成 5、已关闭',
  `freight_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '运费金额',
  `sales_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '销售金额',
  `payment_price` decimal(10,2) NOT NULL DEFAULT '0.00' COMMENT '支付金额',
  `payment_time` datetime DEFAULT NULL COMMENT '付款时间',
  `delivery_time` datetime DEFAULT NULL COMMENT '发货时间',
  `receiver_time` datetime DEFAULT NULL COMMENT '收货时间',
  `closing_time` datetime DEFAULT NULL COMMENT '成交时间',
  `user_message` varchar(100) DEFAULT NULL COMMENT '买家留言',
  `transaction_id` varchar(32) DEFAULT NULL COMMENT '支付交易ID',
  `logistics_id` varchar(32) DEFAULT NULL COMMENT '物流id',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  `distributor_id` bigint DEFAULT NULL COMMENT '下单经销商ID',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_order_no` (`order_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单';

DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` varchar(32) NOT NULL COMMENT 'PK',
  `del_flag` char(2) NOT NULL DEFAULT '0' COMMENT '逻辑删除标记',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后更新时间',
  `order_id` varchar(32) NOT NULL COMMENT '订单编号',
  `spu_id` varchar(32) DEFAULT NULL COMMENT '商品Id',
  `spu_name` varchar(200) DEFAULT NULL COMMENT '商品名',
  `pic_url` varchar(500) NOT NULL COMMENT '图片',
  `quantity` int NOT NULL COMMENT '商品数量',
  `sales_price` decimal(10,2) NOT NULL COMMENT '购买单价',
  `freight_price` decimal(10,2) DEFAULT '0.00' COMMENT '运费金额',
  `payment_price` decimal(10,2) DEFAULT '0.00' COMMENT '支付金额',
  `remark` varchar(250) DEFAULT NULL COMMENT '备注',
  `status` char(2) DEFAULT '0' COMMENT '状态0：正常；1：退款中',
  `is_refund` char(2) DEFAULT '0' COMMENT '是否退款0:否 1：是',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单详情';

DROP TABLE IF EXISTS `order_logistics`;
CREATE TABLE `order_logistics` (
  `id` varchar(32) NOT NULL COMMENT 'PK',
  `del_flag` char(2) NOT NULL DEFAULT '0' COMMENT '逻辑删除标记',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后更新时间',
  `postal_code` varchar(10) DEFAULT NULL COMMENT '邮编',
  `user_name` varchar(50) NOT NULL COMMENT '收货人名字',
  `tel_num` varchar(20) NOT NULL COMMENT '电话号码',
  `address` varchar(255) NOT NULL COMMENT '详细地址',
  `logistics` char(20) DEFAULT NULL COMMENT '物流商家',
  `logistics_no` varchar(30) DEFAULT NULL COMMENT '物流单号',
  `status` char(2) DEFAULT NULL COMMENT '快递状态',
  `is_check` char(2) DEFAULT NULL COMMENT '签收标记',
  `message` varchar(500) DEFAULT NULL COMMENT '相关信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='订单物流表';

-- ----------------------------
-- 5. 购物车表
-- ----------------------------
DROP TABLE IF EXISTS `shopping_cart`;
CREATE TABLE `shopping_cart` (
  `id` varchar(32) NOT NULL COMMENT 'PK',
  `del_flag` char(2) NOT NULL DEFAULT '0' COMMENT '逻辑删除标记',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后更新时间',
  `user_id` varchar(32) NOT NULL COMMENT '用户编号',
  `spu_id` varchar(32) NOT NULL COMMENT '商品SPU',
  `quantity` int NOT NULL COMMENT '数量',
  `spu_name` varchar(200) DEFAULT NULL COMMENT 'spu名字',
  `add_price` decimal(10,2) DEFAULT NULL COMMENT '加入时价格',
  `pic_url` varchar(500) DEFAULT NULL COMMENT '图片',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='购物车';

-- ----------------------------
-- 6. 用户地址表
-- ----------------------------
DROP TABLE IF EXISTS `user_address`;
CREATE TABLE `user_address` (
  `id` varchar(32) NOT NULL COMMENT 'PK',
  `user_id` varchar(32) NOT NULL COMMENT '用户ID',
  `name` varchar(50) NOT NULL COMMENT '收货人',
  `phone` varchar(20) NOT NULL COMMENT '手机号',
  `province` varchar(50) DEFAULT NULL COMMENT '省份',
  `city` varchar(50) DEFAULT NULL COMMENT '城市',
  `district` varchar(50) DEFAULT NULL COMMENT '区县',
  `address` varchar(255) NOT NULL COMMENT '详细地址',
  `is_default` char(2) DEFAULT '0' COMMENT '是否默认（0否 1是）',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户地址';

-- ----------------------------
-- 7. 系统参数配置表
-- ----------------------------
DROP TABLE IF EXISTS `sys_config`;
CREATE TABLE `sys_config` (
  `config_id` int NOT NULL AUTO_INCREMENT COMMENT '参数主键',
  `config_name` varchar(100) DEFAULT '' COMMENT '参数名称',
  `config_key` varchar(100) DEFAULT '' COMMENT '参数键名',
  `config_value` varchar(500) DEFAULT '' COMMENT '参数键值',
  `config_type` char(1) DEFAULT 'N' COMMENT '系统内置（Y是 N否）',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`config_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COMMENT='参数配置表';

INSERT INTO `sys_config` (`config_id`, `config_name`, `config_key`, `config_value`, `config_type`, `create_by`, `create_time`, `remark`) VALUES
(1,'主框架页-默认皮肤样式名称','sys.index.skinName','skin-blue','Y','admin',NOW(),'蓝色'),
(2,'用户管理-账号初始密码','sys.user.initPassword','123456','Y','admin',NOW(),'初始化密码'),
(3,'主框架页-侧边栏主题','sys.index.sideTheme','theme-dark','Y','admin',NOW(),'深色主题'),
(4,'账号自助-验证码开关','sys.account.captchaEnabled','true','Y','admin',NOW(),'是否开启验证码'),
(5,'账号自助-是否开启用户注册','sys.account.registerUser','false','Y','admin',NOW(),'是否开启注册'),
(6,'用户登录-黑名单列表','sys.login.blackIPList','','Y','admin',NOW(),'IP黑名单');

-- ----------------------------
-- 8. 部门表
-- ----------------------------
DROP TABLE IF EXISTS `sys_dept`;
CREATE TABLE `sys_dept` (
  `dept_id` bigint NOT NULL AUTO_INCREMENT COMMENT '部门id',
  `parent_id` bigint DEFAULT '0' COMMENT '父部门id',
  `ancestors` varchar(50) DEFAULT '' COMMENT '祖级列表',
  `dept_name` varchar(30) DEFAULT '' COMMENT '部门名称',
  `order_num` int DEFAULT '0' COMMENT '显示顺序',
  `leader` varchar(20) DEFAULT NULL COMMENT '负责人',
  `phone` varchar(11) DEFAULT NULL COMMENT '联系电话',
  `email` varchar(50) DEFAULT NULL COMMENT '邮箱',
  `status` char(1) DEFAULT '0' COMMENT '部门状态（0正常 1停用）',
  `del_flag` char(1) DEFAULT '0' COMMENT '删除标志（0代表存在 2代表删除）',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  PRIMARY KEY (`dept_id`)
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=utf8mb4 COMMENT='部门表';

INSERT INTO `sys_dept` (`dept_id`, `parent_id`, `ancestors`, `dept_name`, `order_num`, `leader`, `status`, `del_flag`, `create_by`) VALUES
(100, 0, '0', '定阳商城', 0, 'admin', '0', '0', 'admin'),
(101, 100, '0,100', '研发部', 1, NULL, '0', '0', 'admin'),
(102, 100, '0,100', '运营部', 2, NULL, '0', '0', 'admin'),
(103, 100, '0,100', '市场部', 3, NULL, '0', '0', 'admin');

-- ----------------------------
-- 9. 字典类型表
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_type`;
CREATE TABLE `sys_dict_type` (
  `dict_id` bigint NOT NULL AUTO_INCREMENT COMMENT '字典主键',
  `dict_name` varchar(100) DEFAULT '' COMMENT '字典名称',
  `dict_type` varchar(100) DEFAULT '' COMMENT '字典类型',
  `status` char(1) DEFAULT '0' COMMENT '状态（0正常 1停用）',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`dict_id`),
  UNIQUE KEY `dict_type` (`dict_type`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COMMENT='字典类型表';

INSERT INTO `sys_dict_type` (`dict_id`, `dict_name`, `dict_type`, `status`, `create_by`, `create_time`, `remark`) VALUES
(1,'通知公告状态','sys_notice_status','0','admin',NOW(),'通知公告状态'),
(2,'商城订单状态','mall_order_status','0','admin',NOW(),'商城订单状态'),
(3,'商品上架状态','goods_shelf_status','0','admin',NOW(),'商品上架状态'),
(4,'用户状态','sys_user_status','0','admin',NOW(),'用户状态');

-- ----------------------------
-- 10. 字典数据表
-- ----------------------------
DROP TABLE IF EXISTS `sys_dict_data`;
CREATE TABLE `sys_dict_data` (
  `dict_code` bigint NOT NULL AUTO_INCREMENT COMMENT '字典编码',
  `dict_sort` int DEFAULT '0' COMMENT '字典排序',
  `dict_label` varchar(100) DEFAULT '' COMMENT '字典标签',
  `dict_value` varchar(100) DEFAULT '' COMMENT '字典键值',
  `dict_type` varchar(100) DEFAULT '' COMMENT '字典类型',
  `css_class` varchar(100) DEFAULT NULL COMMENT '样式属性',
  `list_class` varchar(100) DEFAULT NULL COMMENT '表格回显样式',
  `is_default` char(1) DEFAULT 'N' COMMENT '是否默认（Y是 N否）',
  `status` char(1) DEFAULT '0' COMMENT '状态（0正常 1停用）',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`dict_code`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COMMENT='字典数据表';

INSERT INTO `sys_dict_data` (`dict_sort`, `dict_label`, `dict_value`, `dict_type`, `list_class`, `is_default`, `status`, `create_by`) VALUES
(1,'正常','0','sys_notice_status','primary','Y','0','admin'),
(2,'关闭','1','sys_notice_status','danger','N','0','admin'),
(1,'正常','0','sys_user_status','primary','Y','0','admin'),
(2,'停用','1','sys_user_status','danger','N','0','admin'),
(1,'上架','1','goods_shelf_status','primary','Y','0','admin'),
(2,'下架','0','goods_shelf_status','default','N','0','admin'),
(1,'待支付','1','mall_order_status','warning','N','0','admin'),
(2,'待发货','2','mall_order_status','primary','N','0','admin'),
(3,'待收货','3','mall_order_status','info','N','0','admin'),
(4,'已完成','4','mall_order_status','success','N','0','admin'),
(5,'已取消','5','mall_order_status','default','N','0','admin');

-- ----------------------------
-- 11. 岗位表
-- ----------------------------
DROP TABLE IF EXISTS `sys_post`;
CREATE TABLE `sys_post` (
  `post_id` bigint NOT NULL AUTO_INCREMENT COMMENT '岗位id',
  `post_code` varchar(64) NOT NULL COMMENT '岗位编码',
  `post_name` varchar(50) NOT NULL COMMENT '岗位名称',
  `post_sort` int NOT NULL COMMENT '显示顺序',
  `status` char(1) NOT NULL COMMENT '状态（0正常 1停用）',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`post_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='岗位信息表';

INSERT INTO `sys_post` (`post_id`, `post_code`, `post_name`, `post_sort`, `status`, `create_by`) VALUES
(1,'admin','管理员',1,'0','admin'),
(2,'dealer','经销商',2,'0','admin'),
(3,'operator','运营人员',3,'0','admin');

-- ----------------------------
-- 12. 角色信息表
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `role_id` bigint NOT NULL AUTO_INCREMENT COMMENT '角色ID',
  `role_name` varchar(30) NOT NULL COMMENT '角色名称',
  `role_key` varchar(100) NOT NULL COMMENT '角色权限字符串',
  `role_sort` int NOT NULL COMMENT '显示顺序',
  `data_scope` char(1) DEFAULT '1' COMMENT '数据范围（1全部 2本部门及以下 3本部门 4仅本人 5自定义）',
  `menu_check_strictly` int DEFAULT '1' COMMENT '菜单树选择项是否关联显示',
  `dept_check_strictly` int DEFAULT '1' COMMENT '部门树选择项是否关联显示',
  `status` char(1) NOT NULL COMMENT '角色状态（0正常 1停用）',
  `del_flag` char(1) DEFAULT '0' COMMENT '删除标志（0存在 2删除）',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COMMENT='角色信息表';

INSERT INTO `sys_role` (`role_id`, `role_name`, `role_key`, `role_sort`, `data_scope`, `status`, `del_flag`, `create_by`, `remark`) VALUES
(1,'管理员','admin',1,'1','0','0','admin','管理员'),
(2,'经销商','dealer',2,'5','0','0','admin','经销商角色');

-- ----------------------------
-- 13. 菜单权限表
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu` (
  `menu_id` bigint NOT NULL AUTO_INCREMENT COMMENT '菜单ID',
  `menu_name` varchar(50) NOT NULL COMMENT '菜单名称',
  `parent_id` bigint DEFAULT '0' COMMENT '父菜单ID',
  `order_num` int DEFAULT '0' COMMENT '显示顺序',
  `path` varchar(200) DEFAULT '' COMMENT '路由地址',
  `component` varchar(255) DEFAULT NULL COMMENT '组件路径',
  `query` varchar(255) DEFAULT NULL COMMENT '路由参数',
  `is_frame` int DEFAULT '1' COMMENT '是否为外链（0是 1否）',
  `is_cache` int DEFAULT '0' COMMENT '是否缓存（0缓存 1不缓存）',
  `menu_type` char(1) DEFAULT '' COMMENT '菜单类型（M目录 C菜单 F按钮）',
  `visible` char(1) DEFAULT '0' COMMENT '菜单状态（0显示 1隐藏）',
  `status` char(1) DEFAULT '0' COMMENT '菜单状态（0正常 1停用）',
  `perms` varchar(100) DEFAULT NULL COMMENT '权限标识',
  `icon` varchar(100) DEFAULT '#' COMMENT '菜单图标',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) DEFAULT '' COMMENT '备注',
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3000 DEFAULT CHARSET=utf8mb4 COMMENT='菜单权限表';

INSERT INTO `sys_menu` (`menu_id`, `menu_name`, `parent_id`, `order_num`, `path`, `component`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`) VALUES
-- 根菜单
(0,'根目录',-1,0,'',NULL,'M','0','0','','','admin'),
-- 系统管理目录
(100,'系统管理',0,1,'system','Layout','M','0','0','','system','admin'),
(1001,'系统监控',100,2,'monitor','monitor/index','M','0','0','','monitor','admin'),
(1002,'系统工具',100,3,'tool','tool/index','M','0','0','','tool','admin'),
-- 用户管理
(1,'用户管理',100,1,'user','system/user/index','C','0','0','system:user:list','user','admin'),
(1001,'用户查询',1,1,'','#','F','0','0','system:user:query','#','admin'),
(1002,'用户新增',1,2,'','#','F','0','0','system:user:add','#','admin'),
(1003,'用户修改',1,3,'','#','F','0','0','system:user:edit','#','admin'),
(1004,'用户删除',1,4,'','#','F','0','0','system:user:remove','#','admin'),
(1005,'重置密码',1,5,'','#','F','0','0','system:user:resetPwd','#','admin'),
(1006,'导出用户',1,6,'','#','F','0','0','system:user:export','#','admin'),
(1007,'导入用户',1,7,'','#','F','0','0','system:user:import','#','admin'),
-- 角色管理
(2,'角色管理',100,2,'role','system/role/index','C','0','0','system:role:list','peoples','admin'),
(1008,'角色查询',2,1,'','#','F','0','0','system:role:query','#','admin'),
(1009,'角色新增',2,2,'','#','F','0','0','system:role:add','#','admin'),
(1010,'角色修改',2,3,'','#','F','0','0','system:role:edit','#','admin'),
(1011,'角色删除',2,4,'','#','F','0','0','system:role:remove','#','admin'),
(1012,'导出角色',2,5,'','#','F','0','0','system:role:export','#','admin'),
-- 菜单管理
(3,'菜单管理',100,3,'menu','system/menu/index','C','0','0','system:menu:list','tree-table','admin'),
(1013,'菜单查询',3,1,'','#','F','0','0','system:menu:query','#','admin'),
(1014,'菜单新增',3,2,'','#','F','0','0','system:menu:add','#','admin'),
(1015,'菜单修改',3,3,'','#','F','0','0','system:menu:edit','#','admin'),
(1016,'菜单删除',3,4,'','#','F','0','0','system:menu:remove','#','admin'),
-- 部门管理
(4,'部门管理',100,4,'dept','system/dept/index','C','0','0','system:dept:list','tree','admin'),
(1017,'部门查询',4,1,'','#','F','0','0','system:dept:query','#','admin'),
(1018,'部门新增',4,2,'','#','F','0','0','system:dept:add','#','admin'),
(1019,'部门修改',4,3,'','#','F','0','0','system:dept:edit','#','admin'),
(1020,'部门删除',4,4,'','#','F','0','0','system:dept:remove','#','admin'),
-- 岗位管理
(5,'岗位管理',100,5,'post','system/post/index','C','0','0','system:post:list','tree-table','admin'),
(1021,'岗位查询',5,1,'','#','F','0','0','system:post:query','#','admin'),
(1022,'岗位新增',5,2,'','#','F','0','0','system:post:add','#','admin'),
(1023,'岗位修改',5,3,'','#','F','0','0','system:post:edit','#','admin'),
(1024,'岗位删除',5,4,'','#','F','0','0','system:post:remove','#','admin'),
(1025,'岗位导出',5,5,'','#','F','0','0','system:post:export','#','admin'),
-- 字典管理
(6,'字典管理',100,6,'dict','system/dict/index','C','0','0','system:dict:list','message','admin'),
(1026,'字典查询',6,1,'','#','F','0','0','system:dict:query','#','admin'),
(1027,'字典新增',6,2,'','#','F','0','0','system:dict:add','#','admin'),
(1028,'字典修改',6,3,'','#','F','0','0','system:dict:edit','#','admin'),
(1029,'字典删除',6,4,'','#','F','0','0','system:dict:remove','#','admin'),
(1030,'字典导出',6,5,'','#','F','0','0','system:dict:export','#','admin'),
-- 参数设置
(7,'参数设置',100,7,'config','system/config/index','C','0','0','system:config:list','edit','admin'),
(1031,'参数查询',7,1,'','#','F','0','0','system:config:query','#','admin'),
(1032,'参数新增',7,2,'','#','F','0','0','system:config:add','#','admin'),
(1033,'参数修改',7,3,'','#','F','0','0','system:config:edit','#','admin'),
(1034,'参数删除',7,4,'','#','F','0','0','system:config:remove','#','admin'),
(1035,'参数导出',7,5,'','#','F','0','0','system:config:export','#','admin'),
-- 通知公告
(8,'通知公告',100,8,'notice','system/notice/index','C','0','0','system:notice:list','message','admin'),
(1036,'通知查询',8,1,'','#','F','0','0','system:notice:query','#','admin'),
(1037,'通知新增',8,2,'','#','F','0','0','system:notice:add','#','admin'),
(1038,'通知修改',8,3,'','#','F','0','0','system:notice:edit','#','admin'),
(1039,'通知删除',8,4,'','#','F','0','0','system:notice:remove','#','admin'),
-- 日志管理
(9,'日志管理',100,9,'log','system/log/index','M','0','0','','log','admin'),
(2000,'操作日志',9,1,'operlog','monitor/operlog/index','C','0','0','system:operlog:list','form','admin'),
(2001,'登录日志',9,2,'logininfor','monitor/logininfor/index','C','0','0','system:logininfor:list','logininfor','admin'),
-- 商城管理
(2000,'商城管理',0,2,'mall','mall/index','M','0','0','','shopping','admin'),
-- 商品分类
(2001,'商品分类',2000,1,'goodsCategory','mall/goodsCategory/index','C','0','0','mall:goodscategory:list','clipboard','admin'),
-- 商品管理
(2002,'商品管理',2000,2,'goodsSpu','mall/goodsSpu/index','C','0','0','mall:goodsspu:list','goods','admin'),
-- 订单管理
(2003,'订单管理',2000,3,'orderinfo','mall/orderinfo/index','C','0','0','mall:orderinfo:list','shopping','admin'),
-- 会员管理
(2004,'会员管理',2000,4,'member','mall/member/index','C','0','0','mall:member:list','user','admin'),
-- 轮播图管理
(2005,'轮播图管理',2000,5,'banner','mall/banner/index','C','0','0','mall:banner:list','carousel','admin'),
-- 优惠券管理
(2006,'优惠券管理',2000,6,'coupon','mall/coupon/index','C','0','0','mall:coupon:list','ticket','admin'),
-- 抽奖管理
(2007,'抽奖管理',2000,7,'lottery','mall/lottery/index','C','0','0','mall:lottery:list','lottery','admin'),
-- 积分规则
(2008,'积分规则',2000,8,'integralRule','mall/integralRule/index','C','0','0','mall:integralrule:list','money','admin');

-- ----------------------------
-- 14. 用户表
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `user_id` bigint NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `dept_id` bigint DEFAULT NULL COMMENT '部门ID',
  `user_name` varchar(30) NOT NULL COMMENT '用户账号',
  `nick_name` varchar(30) NOT NULL COMMENT '用户昵称',
  `user_type` varchar(2) DEFAULT '00' COMMENT '用户类型',
  `email` varchar(50) DEFAULT '' COMMENT '用户邮箱',
  `phonenumber` varchar(11) DEFAULT '' COMMENT '手机号码',
  `sex` char(1) DEFAULT '0' COMMENT '用户性别（0男 1女 2未知）',
  `avatar` varchar(100) DEFAULT '' COMMENT '头像地址',
  `password` varchar(100) DEFAULT '' COMMENT '密码',
  `status` char(1) DEFAULT '0' COMMENT '帐号状态（0正常 1停用）',
  `del_flag` char(1) DEFAULT '0' COMMENT '删除标志（0代表存在 2代表删除）',
  `login_ip` varchar(128) DEFAULT '' COMMENT '最后登录IP',
  `login_date` datetime DEFAULT NULL COMMENT '最后登录时间',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(500) DEFAULT NULL COMMENT '备注',
  `dealer_level` int DEFAULT NULL COMMENT '经销商级别（0普通用户 1一级经销商 2二级经销商）',
  `parent_distributor_id` bigint DEFAULT NULL COMMENT '上级经销商ID',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COMMENT='用户信息表';

INSERT INTO `sys_user` (`user_id`, `user_name`, `nick_name`, `dept_id`, `password`, `sex`, `status`, `del_flag`, `create_by`, `dealer_level`) VALUES
(1,'admin','管理员',100,'$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE/sW/eJ7.rCuu','0','0','0','admin',NULL),
(2,'dealer01','一级经销商',101,'$2a$10$7JB720yubVSZvUI0rEqK/.VqGOZTH.ulu33dHOiBE/sW/eJ7.rCuu','0','0','0','admin',1);

-- ----------------------------
-- 15. 用户和角色关联表
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `user_id` bigint NOT NULL COMMENT '用户ID',
  `role_id` bigint NOT NULL COMMENT '角色ID',
  PRIMARY KEY (`user_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户和角色关联表';

INSERT INTO `sys_user_role` (`user_id`, `role_id`) VALUES
(1, 1),
(2, 2);

-- ----------------------------
-- 16. 角色和菜单关联表
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_menu`;
CREATE TABLE `sys_role_menu` (
  `role_id` bigint NOT NULL COMMENT '角色ID',
  `menu_id` bigint NOT NULL COMMENT '菜单ID',
  PRIMARY KEY (`role_id`,`menu_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色和菜单关联表';

INSERT INTO `sys_role_menu` (`role_id`, `menu_id`)
SELECT 1, `menu_id` FROM `sys_menu` WHERE `menu_id` > 0;

-- ----------------------------
-- 17. 部门关联表
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_dept`;
CREATE TABLE `sys_role_dept` (
  `role_id` bigint NOT NULL COMMENT '角色ID',
  `dept_id` bigint NOT NULL COMMENT '部门ID',
  PRIMARY KEY (`role_id`,`dept_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='角色和部门关联表';

-- ----------------------------
-- 18. 用户与岗位关联表
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_post`;
CREATE TABLE `sys_user_post` (
  `user_id` bigint NOT NULL COMMENT '用户ID',
  `post_id` bigint NOT NULL COMMENT '岗位ID',
  PRIMARY KEY (`user_id`,`post_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='用户与岗位关联表';

-- ----------------------------
-- 19. 通知公告表
-- ----------------------------
DROP TABLE IF EXISTS `sys_notice`;
CREATE TABLE `sys_notice` (
  `notice_id` bigint NOT NULL AUTO_INCREMENT COMMENT '公告ID',
  `notice_title` varchar(50) NOT NULL COMMENT '公告标题',
  `notice_type` char(1) NOT NULL COMMENT '公告类型（1通知 2公告）',
  `notice_content` text COMMENT '公告内容',
  `status` char(1) DEFAULT '0' COMMENT '公告状态（0正常 1关闭）',
  `create_by` varchar(64) DEFAULT '' COMMENT '创建者',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_by` varchar(64) DEFAULT '' COMMENT '更新者',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `remark` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`notice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COMMENT='通知公告表';

INSERT INTO `sys_notice` (`notice_id`, `notice_title`, `notice_type`, `notice_content`, `status`, `create_by`) VALUES
(1,'系统升级通知','1','<p>系统将于今晚进行升级维护，请提前保存数据。</p>','0','admin');

-- ----------------------------
-- 20. 操作日志表
-- ----------------------------
DROP TABLE IF EXISTS `sys_oper_log`;
CREATE TABLE `sys_oper_log` (
  `oper_id` bigint NOT NULL AUTO_INCREMENT COMMENT '日志主键',
  `title` varchar(50) DEFAULT '' COMMENT '模块标题',
  `business_type` int DEFAULT '0' COMMENT '业务类型',
  `method` varchar(100) DEFAULT '' COMMENT '方法名称',
  `request_method` varchar(10) DEFAULT '' COMMENT '请求方式',
  `operator_type` int DEFAULT '0' COMMENT '操作类别',
  `oper_name` varchar(50) DEFAULT '' COMMENT '操作人员',
  `dept_name` varchar(50) DEFAULT '' COMMENT '部门名称',
  `oper_url` varchar(255) DEFAULT '' COMMENT '请求URL',
  `oper_ip` varchar(128) DEFAULT '' COMMENT '主机地址',
  `oper_location` varchar(255) DEFAULT '' COMMENT '操作地点',
  `oper_param` varchar(2000) DEFAULT '' COMMENT '请求参数',
  `json_result` varchar(2000) DEFAULT '' COMMENT '返回参数',
  `status` int DEFAULT '0' COMMENT '操作状态（0正常 1异常）',
  `error_msg` varchar(2000) DEFAULT '' COMMENT '错误消息',
  `oper_time` datetime DEFAULT NULL COMMENT '操作时间',
  PRIMARY KEY (`oper_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COMMENT='操作日志记录';

-- ----------------------------
-- 21. 登录日志表
-- ----------------------------
DROP TABLE IF EXISTS `sys_logininfor`;
CREATE TABLE `sys_logininfor` (
  `info_id` bigint NOT NULL AUTO_INCREMENT COMMENT '访问ID',
  `user_name` varchar(50) DEFAULT '' COMMENT '用户账号',
  `ipaddr` varchar(128) DEFAULT '' COMMENT '登录IP地址',
  `login_location` varchar(255) DEFAULT '' COMMENT '登录地点',
  `browser` varchar(50) DEFAULT '' COMMENT '浏览器类型',
  `os` varchar(50) DEFAULT '' COMMENT '操作系统',
  `status` char(1) DEFAULT '0' COMMENT '登录状态（0成功 1失败）',
  `msg` varchar(255) DEFAULT '' COMMENT '提示消息',
  `login_time` datetime DEFAULT NULL COMMENT '访问时间',
  PRIMARY KEY (`info_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COMMENT='系统访问记录';

-- ================================================
-- 第二部分：商城扩展表
-- ================================================

-- ----------------------------
-- 22. 会员用户表
-- ----------------------------
DROP TABLE IF EXISTS `ums_member`;
CREATE TABLE `ums_member` (
  `id` bigint NOT NULL COMMENT '主键',
  `nickname` varchar(64) DEFAULT NULL COMMENT '昵称',
  `real_name` varchar(32) DEFAULT NULL COMMENT '真实姓名',
  `phone` varchar(20) NOT NULL COMMENT '手机号',
  `identity_type` varchar(16) DEFAULT NULL COMMENT '身份类型',
  `member_code` varchar(32) DEFAULT NULL COMMENT '会员码',
  `points` int DEFAULT 0 COMMENT '积分',
  `balance` decimal(10,2) DEFAULT 0.00 COMMENT '余额',
  `level` int DEFAULT 0 COMMENT '等级',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像URL',
  `password` varchar(128) DEFAULT NULL COMMENT '密码',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `del_flag` char(1) DEFAULT '0' COMMENT '逻辑删除',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_phone` (`phone`),
  KEY `idx_member_code` (`member_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会员用户';

-- ----------------------------
-- 23. 积分规则表
-- ----------------------------
DROP TABLE IF EXISTS `tb_integral_rule`;
CREATE TABLE `tb_integral_rule` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `register_integral` int NOT NULL DEFAULT 0 COMMENT '注册赠送积分',
  `first_recharge_integral` int NOT NULL DEFAULT 0 COMMENT '首充赠送积分',
  `sign_integral` int NOT NULL DEFAULT 10 COMMENT '签到赠送积分',
  `recommend_integral` int NOT NULL DEFAULT 20 COMMENT '推荐注册赠送积分',
  `red_packet_switch` tinyint NOT NULL DEFAULT 1 COMMENT '红包开关',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `del_flag` tinyint NOT NULL DEFAULT 0 COMMENT '删除标记',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='积分规则';

INSERT INTO `tb_integral_rule` (`register_integral`, `first_recharge_integral`, `sign_integral`, `recommend_integral`, `red_packet_switch`) VALUES
(0, 50, 10, 20, 1);

-- ----------------------------
-- 24. 积分流水表
-- ----------------------------
DROP TABLE IF EXISTS `tb_integral_flow`;
CREATE TABLE `tb_integral_flow` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` bigint NOT NULL COMMENT '用户ID',
  `oper_type` tinyint NOT NULL COMMENT '操作类型：1平台分发 2上级赠送 3首充 4注册 5每日签到 6推荐注册 7红包 8抽奖',
  `integral_num` int NOT NULL COMMENT '积分数量',
  `source_user_id` bigint DEFAULT NULL COMMENT '来源用户ID',
  `business_id` varchar(64) DEFAULT NULL COMMENT '业务ID',
  `remark` varchar(200) DEFAULT NULL COMMENT '备注',
  `oper_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '操作时间',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  `del_flag` tinyint NOT NULL DEFAULT 0 COMMENT '删除标记',
  PRIMARY KEY (`id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_oper_type` (`oper_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='积分流水';

-- ----------------------------
-- 25. 轮播图表
-- ----------------------------
DROP TABLE IF EXISTS `tb_banner`;
CREATE TABLE `tb_banner` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `title` varchar(100) DEFAULT NULL COMMENT '标题',
  `pic_url` varchar(255) NOT NULL DEFAULT '' COMMENT '图片地址',
  `link_url` varchar(255) DEFAULT NULL COMMENT '跳转链接',
  `link_type` char(1) DEFAULT '0' COMMENT '跳转类型(0:无跳转; 1:商品详情; 2:外部链接)',
  `sort` int(11) DEFAULT '0' COMMENT '排序',
  `status` char(1) DEFAULT '1' COMMENT '状态(0:下架; 1:上架)',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `del_flag` char(1) DEFAULT '0' COMMENT '删除标志',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='首页轮播图';

INSERT INTO `tb_banner` (`title`, `pic_url`, `link_type`, `sort`, `status`) VALUES
('首页Banner1', '/static/images/banner/banner1.jpg', '0', 1, '1'),
('首页Banner2', '/static/images/banner/banner2.jpg', '0', 2, '1');

-- ----------------------------
-- 26. 商品券表
-- ----------------------------
DROP TABLE IF EXISTS `tb_coupon_info`;
CREATE TABLE `tb_coupon_info` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键-券ID',
  `coupon_code` varchar(32) NOT NULL COMMENT '券码-唯一',
  `user_id` bigint NOT NULL COMMENT '持有用户ID',
  `goods_id` varchar(64) NOT NULL DEFAULT '' COMMENT '关联商品ID',
  `goods_name` varchar(200) NOT NULL DEFAULT '' COMMENT '商品名称',
  `goods_pic` varchar(255) NOT NULL DEFAULT '' COMMENT '商品图片',
  `integral_price` int NOT NULL DEFAULT 0 COMMENT '兑换积分价格',
  `validity_start` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '有效期开始',
  `validity_end` datetime NOT NULL COMMENT '有效期结束',
  `coupon_status` tinyint NOT NULL DEFAULT 1 COMMENT '券状态：1未使用 2已使用 3已过期',
  `verify_time` datetime DEFAULT NULL COMMENT '核销时间',
  `verify_dealer_id` bigint DEFAULT NULL COMMENT '核销经销商ID',
  `verify_dealer_name` varchar(64) NOT NULL DEFAULT '' COMMENT '核销经销商名称',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `create_by` varchar(32) NOT NULL DEFAULT '' COMMENT '创建人',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_coupon_code` (`coupon_code`),
  KEY `idx_user_status` (`user_id`, `coupon_status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='商品券/代金券';

-- ----------------------------
-- 27. 抽奖配置表
-- ----------------------------
DROP TABLE IF EXISTS `tb_lottery_config`;
CREATE TABLE `tb_lottery_config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `status` char(1) DEFAULT '0' COMMENT '状态（0：关闭；1：开启）',
  `cost_points` int(11) DEFAULT '0' COMMENT '单次抽奖消耗积分',
  `daily_limit` int(11) DEFAULT '1' COMMENT '每日抽奖次数上限',
  `no_prize_probability` double(10,2) DEFAULT '0.00' COMMENT '未中奖概率',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建人',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖配置表';

INSERT INTO `tb_lottery_config` (`status`, `cost_points`, `daily_limit`, `no_prize_probability`, `create_by`) VALUES
('1', 10, 3, 30.00, 'admin');

-- ----------------------------
-- 28. 抽奖奖品表
-- ----------------------------
DROP TABLE IF EXISTS `tb_lottery_prize`;
CREATE TABLE `tb_lottery_prize` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `config_id` bigint(20) NOT NULL COMMENT '配置ID',
  `prize_type` char(1) DEFAULT '0' COMMENT '奖品类型（0：实物；1：积分）',
  `goods_id` varchar(64) DEFAULT NULL COMMENT '关联商品ID',
  `point_amount` int(11) DEFAULT '0' COMMENT '积分数量',
  `prize_name` varchar(100) DEFAULT NULL COMMENT '奖品名称',
  `prize_pic` varchar(255) DEFAULT NULL COMMENT '奖品图片',
  `probability` double(10,2) DEFAULT '0.00' COMMENT '中奖概率',
  `sort_order` int(11) DEFAULT '0' COMMENT '排序号',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`),
  KEY `idx_config_id` (`config_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖奖品表';

INSERT INTO `tb_lottery_prize` (`config_id`, `prize_type`, `point_amount`, `prize_name`, `probability`, `sort_order`) VALUES
(1, '1', 5, '5积分', 30.00, 1),
(1, '1', 10, '10积分', 20.00, 2),
(1, '1', 50, '50积分', 10.00, 3),
(1, '1', 100, '100积分', 5.00, 4);

-- ----------------------------
-- 29. 抽奖记录表
-- ----------------------------
DROP TABLE IF EXISTS `tb_lottery_record`;
CREATE TABLE `tb_lottery_record` (
  `id` bigint NOT NULL AUTO_INCREMENT COMMENT '主键',
  `user_id` bigint DEFAULT NULL COMMENT '用户ID',
  `config_id` bigint(20) DEFAULT NULL COMMENT '所属抽奖活动ID',
  `is_win` char(1) DEFAULT NULL COMMENT '是否中奖（0：未中奖；1：已中奖）',
  `prize_id` bigint DEFAULT NULL COMMENT '奖品ID',
  `prize_name` varchar(200) DEFAULT NULL COMMENT '奖品名称',
  `prize_type` varchar(20) DEFAULT NULL COMMENT '奖品类型',
  `cost_points` int DEFAULT NULL COMMENT '消耗积分',
  `grant_status` char(1) DEFAULT NULL COMMENT '发放状态（0：待发放；1：已发放）',
  `business_id` varchar(64) DEFAULT NULL COMMENT '关联业务ID',
  `create_time` datetime DEFAULT NULL COMMENT '抽奖时间',
  PRIMARY KEY (`id`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_create_time` (`create_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖记录';

-- ----------------------------
-- 30. 上传文件表
-- ----------------------------
DROP TABLE IF EXISTS `sys_upload_file`;
CREATE TABLE `sys_upload_file` (
  `file_id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '文件ID',
  `file_name` varchar(255) DEFAULT NULL COMMENT '存储文件名',
  `original_name` varchar(255) DEFAULT NULL COMMENT '原始文件名',
  `content_type` varchar(100) DEFAULT NULL COMMENT '文件类型',
  `file_size` bigint(20) DEFAULT NULL COMMENT '文件大小',
  `content` longblob COMMENT '文件内容',
  `create_time` datetime DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`file_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='上传文件表';

-- ----------------------------
-- 31. 小程序用户表
-- ----------------------------
DROP TABLE IF EXISTS `wx_ma_user`;
CREATE TABLE `wx_ma_user` (
  `openid` varchar(64) NOT NULL COMMENT '小程序openid',
  `unionid` varchar(64) DEFAULT NULL COMMENT '开放平台unionid',
  `nickname` varchar(128) DEFAULT NULL COMMENT '昵称',
  `avatar_url` varchar(512) DEFAULT NULL COMMENT '头像URL',
  `create_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `update_time` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (`openid`),
  KEY `idx_unionid` (`unionid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='小程序用户信息';

SET FOREIGN_KEY_CHECKS = 1;
