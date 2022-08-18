package com.example.demo.API.persistence.entities;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "characteristic")
public class Characteristic {

    @Id
    @SequenceGenerator(name = "image_sequence", sequenceName = "image_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "image_sequence")
    private Long id;

    @Column
    private String titleCharacteristic;

    @Column
    @OneToMany(mappedBy = "characteristic", fetch = FetchType.LAZY)
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Set<Product> product = new HashSet<>();


    public Characteristic() {
    }

    public Characteristic(String titleCharacteristic) {
        this.titleCharacteristic = titleCharacteristic;
    }

    @Override
    public String toString() {
        return "Characteristic{" +
                "id=" + id +
                ", titleCharacteristic='" + titleCharacteristic + '\'' +
                '}';
    }

}
