package com.example.demo.API.persistence.entities;
import lombok.*;
import javax.persistence.*;

@Setter
@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "cities")
public class City {

    @Id
    @SequenceGenerator(name = "city_sequence", sequenceName = "city_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "city_sequence")
    private Long id;

    @Column
    private String name;

    public City(String name) {
        this.name = name;
    }
}
