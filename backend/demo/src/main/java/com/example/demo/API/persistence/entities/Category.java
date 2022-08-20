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
@Table(name = "categories")
public class Category {
    @Id
    @SequenceGenerator(name = "class_sequence", sequenceName = "class_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "class_sequence")
    private Long id;

    @Column
    private String name;


    @Column
    private String urlImage;

    /*@Column
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<Product> product = new HashSet<>();*/


    //Constructor vacio
    public Category(){
    }

    //CONSTRUCTOR
    public Category(String name, String urlImage /*Product product*/) {
        this.name = name;
        this.urlImage = urlImage;
        //this.product = (Set<Product>) product;
    }


    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "id = " + id + ", " +
                "titleCategory = " + name + ", " +
                "urlImage = " + urlImage + ")";
    }
}
