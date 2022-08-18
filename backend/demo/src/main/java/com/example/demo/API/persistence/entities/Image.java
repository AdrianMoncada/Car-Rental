package com.example.demo.API.persistence.entities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "image")
public class Image {
    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "url")
    private String url;

    @Column
    @OneToMany(mappedBy = "image", fetch = FetchType.LAZY)
    private Set<Product> product = new HashSet<>();

    //Constructor Vacio
    public Image(){
    }

    public Image(String title, String url) {
        this.title = title;
        this.url = url;
    }
}
