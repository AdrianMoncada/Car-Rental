package com.example.demo.API.controller;
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

    @CrossOrigin
    @GetMapping()
    public List<City> getAll() {
        return cityService.getAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<City> getById(@PathVariable Long id){
        return cityService.findById(id);
    }

    @PostMapping
    public ResponseEntity<?> createCity(@RequestBody City aCity){
        cityService.save(aCity);
        return ResponseEntity.ok((HttpStatus.OK));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCity(@RequestBody City aCity, @PathVariable Long id){
        Optional<City> optionalCity= cityService.findById(id);
        if(!optionalCity.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No City found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(cityService.update(aCity, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCity(@PathVariable Long id){
        cityService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
