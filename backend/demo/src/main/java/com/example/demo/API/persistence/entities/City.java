package com.example.demo.API.persistence.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.*;

@Setter
@Getter
@Entity
@EqualsAndHashCode(exclude = "product")
@ToString(exclude = "product")
@Table(name = "citys")
public class City {

    @Id
    @SequenceGenerator(name = "city_sequence", sequenceName = "city_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_sequence")
    private Long id;

    @Column
    private String titleCity;

    @Column
    @OneToMany(mappedBy = "city", fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<Product> product = new HashSet<>();

    public City() {
    }

    public City(String titleCity) {
        this.titleCity = titleCity;
    }


    public Collection<Product> getProducts() {
        return product;
    }


}
