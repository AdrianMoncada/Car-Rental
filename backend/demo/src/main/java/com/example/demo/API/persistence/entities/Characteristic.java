package com.example.demo.API.persistence.entities;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "characteristics")
public class Characteristic {

    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Long id;

    @Column
    private String name;

    @ManyToOne
    @JoinColumn(name = "product")
    Product product;


    public Characteristic() {
    }

    public Characteristic(String name, Product product) {
        this.name = name;
        this.product = product;
    }

    @Override
    public String toString() {
        return "Characteristic{" +
                "id=" + id +
                ", titleCharacteristic='" + name + '\'' +
                '}';
    }

}
