package com.example.demo.API.persistence.entities;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

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

    //Constructor vacio
    public Category(){
    }

    //CONSTRUCTOR
    public Category(String name, String urlImage) {
        this.name = name;
        this.urlImage = urlImage;
    }


    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" +
                "id = " + id + ", " +
                "titleCategory = " + name + ", " +
                "urlImage = " + urlImage + ")";
    }
}
