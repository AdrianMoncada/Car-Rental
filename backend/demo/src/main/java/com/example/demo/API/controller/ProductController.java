package com.example.demo.API.controller;
import com.example.demo.API.persistence.DTO.CityDto;
import com.example.demo.API.persistence.DTO.ProductDto;
import com.example.demo.API.persistence.entities.Product;
import com.example.demo.API.service.CityService;
import com.example.demo.API.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CityService cityService;

    @CrossOrigin
    @GetMapping()
    public List<ProductDto> getAll() {
        return productService.getAllProductDTO();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public List<ProductDto> findByIdDTO(@PathVariable Long id){
        return productService.findBydDTO(id);
    }

    @CrossOrigin
    @GetMapping("categories/{id}")
    public List<Product> findByCategoryId(@PathVariable Long id){
        return productService.findByCategoryId(id);
    }

    @CrossOrigin
    @GetMapping("cities/{id}")
    public List<Product> findByCityId(@PathVariable Long id){
        return productService.findByCityId(id);
    }

/*    @CrossOrigin
    @GetMapping("/{id}")
    public List<CityDto> getById(@PathVariable Long id){
        return cityService.filterCityId(id);
    }*/

    @PostMapping
    public ResponseEntity<String> createProduct(@RequestBody Product p) {
        ResponseEntity<String> response = null;

        if(productService.save(p) != null) {
            response = ResponseEntity.ok("Product created.");
        } else {
            response = ResponseEntity.internalServerError().body("Oops");
        }
        return response;
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@Validated @RequestBody Product aProduct, @PathVariable Long id){
        Optional<Product> optionalProduct= productService.findById(id);
        if(!optionalProduct.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Product found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(productService.update(aProduct, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        Optional<Product> optionalProduct= productService.findById(id);
        if(!optionalProduct.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Product found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(productService.delete(id));
    }


}
