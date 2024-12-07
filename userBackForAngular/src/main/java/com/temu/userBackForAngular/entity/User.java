package com.temu.userBackForAngular.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@Table(name = "users")
@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String email;

}
