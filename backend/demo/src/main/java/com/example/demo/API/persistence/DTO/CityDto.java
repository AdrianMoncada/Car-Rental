package com.example.demo.API.persistence.DTO;
import com.example.demo.API.persistence.entities.Product;
import lombok.*;
import java.io.Serializable;
import java.util.List;

@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CityDto implements Serializable {
    private Long id;
    private String titleCity;
    private List<Product> products;
}
