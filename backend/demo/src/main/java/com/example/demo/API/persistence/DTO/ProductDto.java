package com.example.demo.API.persistence.DTO;
import com.example.demo.API.persistence.entities.Category;
import com.example.demo.API.persistence.entities.Characteristic;
import com.example.demo.API.persistence.entities.City;
import com.example.demo.API.persistence.entities.Image;
import lombok.*;
import java.io.Serializable;
import java.util.Set;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ProductDto implements Serializable {
    private Long id;
    private String name;
    private String description;
    private Category category;
    private City city;
    private Set<Image> images;
    private Set<Characteristic> characteristics;
    private String mainImage;
}
