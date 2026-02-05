package com.dingyangmall.web.core.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import redis.embedded.RedisServer;

import jakarta.annotation.PostConstruct;
import jakarta.annotation.PreDestroy;
import java.io.IOException;

@Configuration
public class EmbeddedRedisConfig {

    private RedisServer redisServer;

    @PostConstruct
    public void startRedis() throws IOException {
        try {
            // Check if port 6379 is in use or just try to start
            // Embedded Redis 0.7.3 might have issues with Windows paths, but usually works
            // Setting port to 6379
            redisServer = new RedisServer(6379);
            redisServer.start();
            System.out.println("Embedded Redis started successfully on port 6379");
        } catch (Exception e) {
            System.err.println("Embedded Redis failed to start: " + e.getMessage());
            // It might be already running, which is fine
        }
    }

    @PreDestroy
    public void stopRedis() {
        if (redisServer != null) {
            try {
                redisServer.stop();
            } catch (Exception e) {
                // Ignore
            }
        }
    }
}
