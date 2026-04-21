-- 修复积分兑换商品的 goods_type
-- 问题：积分兑换商品的 goods_type 应该是 '3'，但数据库中是 '2'
-- 解决方案：将所有有 integral_price 且 goods_type='2' 的商品改为 goods_type='3'

-- 查看当前积分兑换商品的状态
SELECT id, name, goods_type, integral_price, sales_price 
FROM goods_spu 
WHERE integral_price IS NOT NULL AND integral_price > 0;

-- 更新积分兑换商品的 goods_type 为 '3'
UPDATE goods_spu 
SET goods_type = '3'
WHERE integral_price IS NOT NULL AND integral_price > 0 
  AND (goods_type = '2' OR goods_type IS NULL);

-- 验证更新结果
SELECT id, name, goods_type, integral_price, sales_price 
FROM goods_spu 
WHERE integral_price IS NOT NULL AND integral_price > 0;

-- 确认积分兑换商品都被正确标记
SELECT goods_type, COUNT(*) as count 
FROM goods_spu 
WHERE integral_price IS NOT NULL AND integral_price > 0 
GROUP BY goods_type;
