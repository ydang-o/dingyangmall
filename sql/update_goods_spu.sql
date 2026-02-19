ALTER TABLE `goods_spu` 
ADD COLUMN `goods_type` char(1) DEFAULT '0' COMMENT '商品类型（0：普通商品；1：虚拟商品；2：商品券）',
ADD COLUMN `integral_price` int(11) DEFAULT NULL COMMENT '积分价格';