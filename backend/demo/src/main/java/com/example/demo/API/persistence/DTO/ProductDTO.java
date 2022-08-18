package com.example.demo.API.persistence.DTO;

import com.example.demo.API.persistence.entities.Category;
import com.example.demo.API.persistence.entities.Characteristic;
import com.example.demo.API.persistence.entities.City;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


@Getter
@Data
@Setter
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductDTO{

    private Long idProduct;
    private String title;

    //Category
    private Category category;

    //Characteristic
    private Characteristic Characteristic;

    //City
    private City City;


}
