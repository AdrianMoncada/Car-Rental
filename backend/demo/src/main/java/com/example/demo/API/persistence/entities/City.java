package com.example.demo.API.persistence.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "citys")
public class City {

    @Id
    @SequenceGenerator(name = "city_sequence", sequenceName = "city_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_sequence")
    private Long id;

    @Column
    private String title;

    @Column
    @OneToMany(mappedBy = "city", fetch = FetchType.LAZY)
    private Set<Product> product = new HashSet<>();

    public City() {
    }

    public City(String title, Product product) {
        this.title = title;
        this.product = (Set<Product>) product;
    }

}
