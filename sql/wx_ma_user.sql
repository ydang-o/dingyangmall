-- 小程序用户信息（openid 维度）持久化表
-- 说明：WxUserApi 登录/更新用户信息时会 upsert 到该表
-- 执行前请确认数据库名与 application-druid.yml 中 jdbc url 一致（默认 dingyangmall_ry）

USE dingyangmall_ry;

CREATE TABLE IF NOT EXISTS wx_ma_user (
  openid      VARCHAR(64)  NOT NULL COMMENT '小程序 openid（唯一）',
  unionid     VARCHAR(64)  NULL     COMMENT '开放平台 unionid（若有）',
  nickname    VARCHAR(128) NULL     COMMENT '昵称',
  avatar_url  VARCHAR(512) NULL     COMMENT '头像URL',
  create_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  update_time DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
  PRIMARY KEY (openid),
  KEY idx_unionid (unionid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='小程序用户信息';

