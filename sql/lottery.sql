-- ----------------------------
-- 抽奖配置表
-- ----------------------------
DROP TABLE IF EXISTS `tb_lottery_config`;
CREATE TABLE `tb_lottery_config` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `status` char(1) DEFAULT '0' COMMENT '状态（0：关闭；1：开启）',
  `cost_points` int(11) DEFAULT '0' COMMENT '单次抽奖消耗积分',
  `daily_limit` int(11) DEFAULT '0' COMMENT '每日抽奖次数上限',
  `no_prize_probability` double(5,2) DEFAULT '0.00' COMMENT '未中奖概率',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `create_by` varchar(64) DEFAULT NULL COMMENT '创建人',
  `update_by` varchar(64) DEFAULT NULL COMMENT '更新人',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖配置';

-- ----------------------------
-- 抽奖奖品表
-- ----------------------------
DROP TABLE IF EXISTS `tb_lottery_prize`;
CREATE TABLE `tb_lottery_prize` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `config_id` bigint(20) NOT NULL COMMENT '配置ID',
  `prize_type` char(1) DEFAULT '0' COMMENT '奖品类型（0：实物/虚拟商品；1：积分）',
  `goods_id` varchar(64) DEFAULT NULL COMMENT '关联商品ID',
  `point_amount` int(11) DEFAULT NULL COMMENT '积分数量',
  `prize_name` varchar(100) DEFAULT NULL COMMENT '奖品名称',
  `prize_pic` varchar(255) DEFAULT NULL COMMENT '奖品图片',
  `probability` double(5,2) DEFAULT '0.00' COMMENT '中奖概率',
  `sort_order` int(11) DEFAULT '0' COMMENT '排序号',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖奖品';

-- ----------------------------
-- 抽奖记录表
-- ----------------------------
DROP TABLE IF EXISTS `tb_lottery_record`;
CREATE TABLE `tb_lottery_record` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` bigint(20) NOT NULL COMMENT '用户ID',
  `is_win` char(1) DEFAULT '0' COMMENT '是否中奖（0：未中奖；1：已中奖）',
  `prize_id` bigint(20) DEFAULT NULL COMMENT '奖品ID',
  `prize_name` varchar(100) DEFAULT NULL COMMENT '奖品名称',
  `prize_type` char(1) DEFAULT NULL COMMENT '奖品类型',
  `cost_points` int(11) DEFAULT '0' COMMENT '消耗积分',
  `grant_status` char(1) DEFAULT '0' COMMENT '发放状态（0：待发放；1：已发放）',
  `business_id` varchar(64) DEFAULT NULL COMMENT '关联业务ID',
  `create_time` datetime DEFAULT NULL COMMENT '抽奖时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='抽奖记录';

-- ----------------------------
-- 菜单 SQL (假设父菜单ID为 2000 - 商城管理)
-- ----------------------------
-- 抽奖管理菜单
INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`)
VALUES ('抽奖管理', 2000, 10, 'lottery', 'mall/lottery/index', 0, 0, 'C', '0', '0', 'mall:lottery:list', 'luck', 'admin', SYSDATE(), '', NULL, '抽奖管理菜单');

-- 按钮权限
INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`)
VALUES ('抽奖配置查询', (SELECT menu_id FROM sys_menu WHERE menu_name = '抽奖管理' AND parent_id = 2000), 1, '', '', 0, 0, 'F', '0', '0', 'mall:lottery:config', '#', 'admin', SYSDATE(), '', NULL, '');

INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`)
VALUES ('抽奖记录查询', (SELECT menu_id FROM sys_menu WHERE menu_name = '抽奖管理' AND parent_id = 2000), 2, '', '', 0, 0, 'F', '0', '0', 'mall:lottery:record', '#', 'admin', SYSDATE(), '', NULL, '');
