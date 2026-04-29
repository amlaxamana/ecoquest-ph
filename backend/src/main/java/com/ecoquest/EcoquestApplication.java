package com.ecoquest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

/**
 * EcoQuest PH Application - Main Entry Point
 * Gamified Sustainable Tourism & Environmental Monitoring System
 */
@SpringBootApplication
public class EcoquestApplication {

    public static void main(String[] args) {
        SpringApplication.run(EcoquestApplication.class, args);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
