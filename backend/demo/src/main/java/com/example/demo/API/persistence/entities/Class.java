package com.example.demo.API.persistence.entities;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.*;

@Setter
@Getter
@ToString
@Entity
@Table(name = "classes")
public class Class {
    @Id
    @SequenceGenerator(name = "class_sequence", sequenceName = "class_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "class_sequence")
    private Long id;

    @Column
    private String title;

    @Column
    private String description;

    @Column
    private String urlImage;


    //Constructor vacio
    public Class(){
    }

    //CONSTRUCTOR
    public Class(String title, String description, String urlImage) {
        this.title = title;
        this.description = description;
        this.urlImage = urlImage;
    }
}
