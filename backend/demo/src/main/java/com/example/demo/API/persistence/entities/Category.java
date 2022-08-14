package com.example.demo.API.persistence.entities;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.*;

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


    //Constructor vacio
    public Category(){
    }

    //CONSTRUCTOR
    public Category(String title, String description, String urlImage) {
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
    }
}
