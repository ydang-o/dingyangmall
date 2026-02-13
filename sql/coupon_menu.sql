-- 商品券菜单
INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) 
VALUES ('商品券管理', '2000', '11', 'couponInfo', 'mall/coupon/index', '1', '0', 'C', '0', '0', 'mall:coupon:index', 'ticket', 'admin', SYSDATE(), 'admin', SYSDATE(), '商品券管理菜单');

-- 按钮权限
INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) 
VALUES ('商品券查询', (SELECT menu_id FROM (SELECT menu_id FROM sys_menu WHERE menu_name = '商品券管理') as tmp), '1', '', '', '1', '0', 'F', '0', '0', 'mall:coupon:get', '#', 'admin', SYSDATE(), 'admin', SYSDATE(), '');

INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) 
VALUES ('商品券新增', (SELECT menu_id FROM (SELECT menu_id FROM sys_menu WHERE menu_name = '商品券管理') as tmp), '2', '', '', '1', '0', 'F', '0', '0', 'mall:coupon:add', '#', 'admin', SYSDATE(), 'admin', SYSDATE(), '');

INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) 
VALUES ('商品券修改', (SELECT menu_id FROM (SELECT menu_id FROM sys_menu WHERE menu_name = '商品券管理') as tmp), '3', '', '', '1', '0', 'F', '0', '0', 'mall:coupon:edit', '#', 'admin', SYSDATE(), 'admin', SYSDATE(), '');

INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) 
VALUES ('商品券删除', (SELECT menu_id FROM (SELECT menu_id FROM sys_menu WHERE menu_name = '商品券管理') as tmp), '4', '', '', '1', '0', 'F', '0', '0', 'mall:coupon:del', '#', 'admin', SYSDATE(), 'admin', SYSDATE(), '');