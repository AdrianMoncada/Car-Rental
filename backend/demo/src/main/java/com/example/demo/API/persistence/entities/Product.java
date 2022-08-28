package com.example.demo.API.persistence.entities;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.sun.istack.NotNull;
import lombok.*;
import javax.persistence.*;
import java.util.*;

@Setter
@Getter
@ToString
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "products", uniqueConstraints = {@UniqueConstraint(columnNames = {"name"})})
public class Product {

    @Id
    @SequenceGenerator(name = "product_sequence", sequenceName = "product_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "product_sequence")
    @Column(name="id")
    private Long id;

    @Column(name = "name")
    @NotNull
    private String name;

    @Column(name = "description")
    @NotNull
    private String description;

    @JoinColumn(name = "categories_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @JoinColumn(name = "city_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private City city;

    @JsonManagedReference
    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER)
    private Set<Image> images = new HashSet<>();

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            })
    @JoinTable(name = "product_characteristic",
            joinColumns = { @JoinColumn(name = "product_id") },
            inverseJoinColumns = { @JoinColumn(name = "characteristic_id") })
    @JsonInclude
    private Set<Characteristic> characteristics = new HashSet<>();

}
