package com.example.demo.API.persistence.DTO;

import com.example.demo.API.persistence.entities.Category;
import com.example.demo.API.persistence.entities.Characteristic;
import com.example.demo.API.persistence.entities.City;
import com.example.demo.API.persistence.entities.Image;
import lombok.*;

import java.io.Serializable;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto implements Serializable {
    private Long id;
    private String name;
    private Category category;
    private Characteristic characteristic;
    private City city;
    private Image image;
}
