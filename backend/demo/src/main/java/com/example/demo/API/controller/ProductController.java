package com.example.demo.API.controller;


import com.example.demo.API.persistence.entities.Product;
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

    //Get
    @GetMapping
    public ResponseEntity<?> getAllProduct() {
        return ResponseEntity.status(HttpStatus.OK).body(productService.getAll());
    }

    //Get(por ID)
    @GetMapping("/{id}")
    public Optional<Product> getById(@PathVariable Long id){
        return productService.findById(id);
    }


    //Post
    @PostMapping
    public ResponseEntity<?> createProduct(@RequestBody Product aProduct){
        return ResponseEntity.status(HttpStatus.CREATED).body(productService.save(aProduct));
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
