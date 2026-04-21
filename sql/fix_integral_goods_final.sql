-- 修复积分兑换商品数据
-- 问题：goods_type 和 integral_price 不匹配
-- 解决方案：根据 integral_price 来设置 goods_type

-- 1. 查看当前所有商品的 goods_type 和 integral_price
SELECT id, name, goods_type, integral_price, sales_price
FROM goods_spu
WHERE id IN ('G100', 'G101', 'G102', 'G103', 'G104')
ORDER BY id;

-- 2. 将所有 integral_price > 0 的商品设置为 goods_type = '3'（积分兑换商品）
UPDATE goods_spu
SET goods_type = '3'
WHERE integral_price IS NOT NULL AND integral_price > 0;

-- 3. 将所有 integral_price = 0 或 NULL 且 goods_type = '3' 的商品改为普通商品
-- 这些可能是数据错误的商品
UPDATE goods_spu
SET goods_type = '0'
WHERE (integral_price IS NULL OR integral_price = 0) AND goods_type = '3';

-- 4. 验证更新结果
SELECT id, name, goods_type, integral_price, sales_price
FROM goods_spu
WHERE id IN ('G100', 'G101', 'G102', 'G103', 'G104')
ORDER BY id;

-- 5. 查看所有积分兑换商品（goods_type = '3' 且 integral_price > 0）
SELECT id, name, goods_type, integral_price
FROM goods_spu
WHERE goods_type = '3' AND integral_price > 0;
