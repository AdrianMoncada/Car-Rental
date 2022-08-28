package com.example.demo.API.controller;
import com.example.demo.API.persistence.entities.Category;
import com.example.demo.API.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
public class CategoryController {

    @Autowired
    private CategoryService service;

    @CrossOrigin
    @GetMapping()
    public List<Category> getAll() {
        return service.getAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Category> getById(@PathVariable Long id){
        return service.findById(id);
    }

    @PostMapping
    public ResponseEntity<?> createClass(@RequestBody Category aCategory){
        service.save(aCategory);
        return ResponseEntity.ok((HttpStatus.OK));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@RequestBody Category aCategory, @PathVariable Long id){
        Optional<Category> optionalCategory= service.findById(id);
        if(!optionalCategory.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Category found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(service.update(aCategory, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClass(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
