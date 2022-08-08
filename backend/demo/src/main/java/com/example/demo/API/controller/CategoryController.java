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
        Optional<Category> OCategory = service.getById(id);

        if(OCategory.isPresent()){
            return ResponseEntity.ok(service.update(aCategory, id));
        }
        return ResponseEntity.notFound().build();
    }

    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCategory(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(service.delete(id));
    }

}
