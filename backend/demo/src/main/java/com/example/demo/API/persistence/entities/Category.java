package com.example.demo.API.persistence.entities;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @SequenceGenerator(name = "class_sequence", sequenceName = "class_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "class_sequence")
    private Long id;

    @Column
    private String titleCategory;

    @Column
    private String description;

    @Column
    private String urlImage;

    @Column
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<Product> product = new HashSet<>();


    //Constructor vacio
    public Category(){
    }

    //CONSTRUCTOR
    public Category(String titleCategory, String description, String urlImage /*Product product*/) {
        this.titleCategory = titleCategory;
        this.description = description;
        this.urlImage = urlImage;
        //this.product = (Set<Product>) product;
    }


    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "id = " + id + ", " +
                "titleCategory = " + titleCategory + ", " +
                "description = " + description + ", " +
                "urlImage = " + urlImage + ")";
    }
}
