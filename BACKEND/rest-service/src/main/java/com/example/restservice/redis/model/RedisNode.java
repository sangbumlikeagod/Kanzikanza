package com.example.restservice.redis.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.data.redis.core.RedisHash;

@Entity
@RedisHash("Node")
@AllArgsConstructor
@NoArgsConstructor
public class RedisNode {
    @Id
    private String NodeId;
    private Integer UserId;
    private String value;
    private String next;
    private String before;
}
