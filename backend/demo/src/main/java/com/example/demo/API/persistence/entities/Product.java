package com.example.demo.API.persistence.entities;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Setter
@Getter
@ToString
@Entity
@Table(name = "products", uniqueConstraints = {@UniqueConstraint(columnNames = {"name"})})
public class Product {

    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    private Long id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "description")
    @NotNull
    private String description;

    @JoinColumn(name = "categories_id")
    @ManyToOne(fetch = FetchType.EAGER)
    /*@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)*/
    private Category category;

    @JoinColumn(name = "city_id")
    @ManyToOne(fetch = FetchType.EAGER)
    /*@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)*/
    private City city;

    @JsonManagedReference
    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER)
    private Set<Image> images = new HashSet<>();

    /*@JsonManagedReference
    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER)
    private Set<Characteristic> characteristics = new HashSet<>();*/


    //Constructor vacio
    public Product(){
    }

    public Product(String name, Category category , City city, String description) {
        this.name = name;
        this.category = category;
        this.city = city;
        this.description = description;
    }
}
