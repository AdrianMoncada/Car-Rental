package com.example.demo.API.persistence.entities;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import javax.persistence.*;

@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "images")
public class Image {
    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "url")
    private String url;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "product")
    Product product;

    public Image(String name, String url, Product product) {
        this.name = name;
        this.url = url;
        this.product = product;
    }
}
