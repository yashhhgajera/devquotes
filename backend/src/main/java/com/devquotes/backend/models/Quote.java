package com.devquotes.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

import javax.annotation.processing.Generated;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Quote {

    @Id
    @GeneratedValue
    private UUID id;

    @Column(nullable = false, length = 100)
    private String author;

    @Column(nullable = false, length = 500)
    private String content;

    @Column
    private int votes = 0;

}
