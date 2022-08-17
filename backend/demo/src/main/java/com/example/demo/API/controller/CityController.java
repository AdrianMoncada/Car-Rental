package com.example.demo.API.controller;

import com.example.demo.API.persistence.entities.Category;
import com.example.demo.API.persistence.entities.City;
import com.example.demo.API.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/cities")
public class CityController {
    @Autowired
    private CityService cityService;

    //Get(todos)
    @GetMapping()
    public List<City> getAll() {
        return cityService.getAll();
    }

    //Get(por ID)
    @GetMapping("/{id}")
    public Optional<City> getById(@PathVariable Long id){
        return cityService.findById(id);
    }


    //Post
    @PostMapping
    public ResponseEntity<?> createCity(@RequestBody City aCity){
        return ResponseEntity.status(HttpStatus.CREATED).body(cityService.save(aCity));
    }

    //Update
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCity(@RequestBody City aCity, @PathVariable Long id){
        Optional<City> optionalCity= cityService.findById(id);
        if(!optionalCity.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No City found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(cityService.update(aCity, id));
    }


    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCity(@PathVariable Long id){
        Optional<City> optionalCity= cityService.findById(id);
        if(!optionalCity.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No City found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(cityService.delete(id));
    }
}
