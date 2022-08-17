package com.example.demo.API.persistence.entities;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@ToString
@Entity
@Table(name = "categories")
public class Category {
    @Id
    @SequenceGenerator(name = "category_sequence", sequenceName = "category_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "category_sequence")
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String urlImage;

    @Column
    @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
    private Set<Product> product = new HashSet<>();

    //Constructor vacio
    public Category(){
    }

    //CONSTRUCTOR
    public Category(String title, String description, String urlImage, Product product) {
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
        this.product = (Set<Product>) product;
    }
}
