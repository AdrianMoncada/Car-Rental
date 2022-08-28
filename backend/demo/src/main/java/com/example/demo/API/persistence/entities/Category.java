package com.example.demo.API.persistence.entities;
import lombok.*;
import javax.persistence.*;

@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
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

    public Category(String name, String urlImage) {
        this.name = name;
        this.urlImage = urlImage;
    }
}
