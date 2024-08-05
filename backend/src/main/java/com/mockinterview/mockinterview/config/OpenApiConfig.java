package com.mockinterview.mockinterview.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.servers.Server;

@Configuration
public class OpenApiConfig {

    
    @Bean
    public OpenAPI defineApi()
    {
        //new swagger configuration
        Server server = new Server();
        server.setUrl("http://localhost:8080");
        server.setDescription("Mock Interview Application");

        Info info= new Info().title("Mock Interview ").version("1.0").description("Swagger testing phase");

        return new OpenAPI().addServersItem(server).info(info);
    }
}
