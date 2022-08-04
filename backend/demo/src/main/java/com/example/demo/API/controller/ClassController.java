package com.example.demo.API.controller;
import com.example.demo.API.persistence.entities.Class;
import com.example.demo.API.service.ClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/classes")
public class ClassController {

    @Autowired
    ClassService service;

    //Get
    @GetMapping()
    public List<Class> getAll() {
        return service.getAll();
    }


    //Post
    @PostMapping
    public ResponseEntity<?> createClass(@RequestBody Class aClass){
        service.save(aClass);
        return ResponseEntity.ok((HttpStatus.OK));
    }

    //Update
    @PutMapping
    public ResponseEntity<?> updateClass(@RequestBody Class aClass){
        service.update(aClass);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClass(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
