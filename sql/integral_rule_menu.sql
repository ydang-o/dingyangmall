-- 积分规则菜单 SQL
-- 请根据实际 parent_id (商城管理菜单ID) 修改
INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) 
VALUES ('积分规则', '2000', '10', 'integralRule', 'mall/integralRule/index', '1', '0', 'C', '0', '0', 'mall:integralrule:index', 'money', 'admin', SYSDATE(), 'admin', SYSDATE(), '积分规则菜单');

-- 按钮权限
-- 注意：这里使用了子查询获取上一步插入的菜单ID，如果执行报错，请手动替换为实际ID
SET @parentId = (SELECT menu_id FROM sys_menu WHERE menu_name = '积分规则' LIMIT 1);

INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) 
VALUES ('积分规则新增', @parentId, '1', '#', '', '1', '0', 'F', '0', '0', 'mall:integralrule:add', '#', 'admin', SYSDATE(), 'admin', SYSDATE(), '');

INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) 
VALUES ('积分规则修改', @parentId, '2', '#', '', '1', '0', 'F', '0', '0', 'mall:integralrule:edit', '#', 'admin', SYSDATE(), 'admin', SYSDATE(), '');

INSERT INTO `sys_menu` (`menu_name`, `parent_id`, `order_num`, `path`, `component`, `is_frame`, `is_cache`, `menu_type`, `visible`, `status`, `perms`, `icon`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) 
VALUES ('积分规则删除', @parentId, '3', '#', '', '1', '0', 'F', '0', '0', 'mall:integralrule:del', '#', 'admin', SYSDATE(), 'admin', SYSDATE(), '');
