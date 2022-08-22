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
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @Autowired
    private CityService cityService;


    //Get

    @CrossOrigin(origins = "http://morgam-frontend.s3-website.us-east-2.amazonaws.com")
    @GetMapping()
    public List<ProductDto> getAll() {
        return productService.getAllProductDTO();
    }

    //Get(por ID)
    /*@GetMapping("/{id}")
    public Optional<Product> findById(@PathVariable Long id){
        return productService.findById(id);
    }*/

    //GET POR ID DTO
    @GetMapping("/{id}")
    public List<ProductDto> findByIdDTO(@PathVariable Long id){
        return productService.findBydDTO(id);
    }

    //Get por Cuidad:
    @GetMapping("cities/{id}")
    public List<CityDto> getById(@PathVariable Long id){
        return cityService.filterCityId(id);
    }




    //Post
    /*@PostMapping
    public ResponseEntity<HttpStatus> createProduct(@RequestBody Product aProduct){
        try {
            productService.save(aProduct);
            System.out.println("OK Mio");
            return ResponseEntity.ok(HttpStatus.CREATED);
        }catch (Exception e){
            System.out.println(e.getMessage());
            return null;
        }
    }*/
/*    @PostMapping
    public ResponseEntity<?> createProduct(@Validated @RequestBody Product aProduct){
        Product createProduct = productService.save(aProduct);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createProduct.getId()).toUri();
        return ResponseEntity.created(location).body(createProduct);
    }*/

    @PostMapping
    public ResponseEntity<String> createProduct(@RequestBody Product p) {
        ResponseEntity<String> response = null;

        if(productService.save(p) != null) {
            response = ResponseEntity.ok("Patient created.");
        } else {
            response = ResponseEntity.internalServerError().body("Oops");
        }
        return response;
    }

    //Update
    @PutMapping("/{id}")
    public ResponseEntity<?> updateProduct(@Validated @RequestBody Product aProduct, @PathVariable Long id){
        Optional<Product> optionalProduct= productService.findById(id);
        if(!optionalProduct.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Product found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(productService.update(aProduct, id));
    }


    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id){
        Optional<Product> optionalProduct= productService.findById(id);
        if(!optionalProduct.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Product found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(productService.delete(id));
    }
}
