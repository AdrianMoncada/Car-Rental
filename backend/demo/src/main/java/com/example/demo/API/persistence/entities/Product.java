package com.example.demo.API.persistence.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Setter
@Getter
@ToString
@Entity
@Table(name = "products", uniqueConstraints = {@UniqueConstraint(columnNames = {"title"})})
public class Product {
    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Long id;

    @Column
    @NotNull
    private String title;

    @JoinColumn(name = "categories_id")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Category category;

    @JoinColumn(name = "characteristic_id")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Characteristic characteristic;


    @JoinColumn(name = "city_id")
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private City city;

    /*@JoinColumn(name = "image_id")
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Image image;*/

    //Constructor vacio
    public Product(){
    }

    public Product(Long id, String title, City city, Characteristic characteristic , Category category) {
        this.id =id;
        this.title = title;
        this.category = category;
        this.characteristic = characteristic;
        this.city = city;
    }


}
