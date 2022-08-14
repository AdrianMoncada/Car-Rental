package com.example.demo.API.controller;
import com.example.demo.API.persistence.entities.Category;
import com.example.demo.API.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    CategoryService service;

    //Get
    @GetMapping
    public ResponseEntity<?> getAllCategories() {
        return ResponseEntity.status(HttpStatus.OK).body(service.getAll());
    }

    //Post
    @PostMapping
    public ResponseEntity<?> createCategory(@RequestBody Category aCategory){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(aCategory));
    }

    //Update
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@RequestBody Category aCategory, @PathVariable Long id){
        Optional<Category> optionalCategory= service.findById(id);
        if(!optionalCategory.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Category found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(service.update(aCategory, id));
    }

    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id){
        Optional<Category> optionalCategory= service.findById(id);
        if(!optionalCategory.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Category found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(service.delete(id));
    }

}
