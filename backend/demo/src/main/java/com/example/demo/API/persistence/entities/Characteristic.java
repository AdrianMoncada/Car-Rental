package com.example.demo.API.persistence.entities;


import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "characteristic")
public class Characteristic {

    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Long id;

    @Column
    private String title;

    @Column
    @OneToMany(mappedBy = "characteristic", fetch = FetchType.LAZY)
    private Set<Product> product = new HashSet<>();


    public Characteristic() {
    }

    public Characteristic(String title, Product product) {
        this.title = title;
        this.product = (Set<Product>) product;
    }

}
