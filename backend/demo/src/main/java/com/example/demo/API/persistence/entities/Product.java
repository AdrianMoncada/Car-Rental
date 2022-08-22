package com.example.demo.API.persistence.entities;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Category category;

    @JoinColumn(name = "city_id")
    @ManyToOne(fetch = FetchType.EAGER)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private City city;

    @OneToMany(mappedBy = "product")
    private List<Image> images = new ArrayList<Image>();

    @OneToMany(mappedBy = "product")
    private List<Characteristic> characteristics = new ArrayList<Characteristic>();

    //Constructor vacio
    public Product(){
    }

    public Product(Long id, String name, Category category , City city) {
        this.id =id;
        this.name = name;
        this.category = category;
        this.city = city;
    }
}
