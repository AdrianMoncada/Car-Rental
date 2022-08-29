package com.example.demo.API.persistence.entities;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "characteristics")
public class Characteristic {

    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    @Column(name="id")
    private Long id;

    @Column
    private String name;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "characteristics")
    @JsonIgnore
    private Set<Product> products = new HashSet<>();

    public Characteristic(String name) {
        this.name = name;
    }

    public Characteristic(Long id) {
        this.id = id;
    }
}
