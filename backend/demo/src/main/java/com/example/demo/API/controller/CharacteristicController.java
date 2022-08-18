package com.example.demo.API.controller;

import com.example.demo.API.persistence.entities.Characteristic;
import com.example.demo.API.service.CharacteristicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/characteristics")
public class CharacteristicController {
    @Autowired
    private CharacteristicService characteristicService;

    //Get(todos)
    @GetMapping()
    public List<Characteristic> getAll() {
        return characteristicService.getAll();
    }

    //Get(por ID)
    @GetMapping("/{id}")
    public Optional<Characteristic> getById(@PathVariable Long id){
        return characteristicService.findById(id);
    }


    //Post
    @PostMapping
    public ResponseEntity<?> createCharacteristic(@RequestBody Characteristic aCharacteristic){
        characteristicService.save(aCharacteristic);
        return ResponseEntity.ok((HttpStatus.OK));
    }

    //Update
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCharacteristic(@RequestBody Characteristic aCharacteristic, @PathVariable Long id){
        Optional<Characteristic> optionalCharacteristic= characteristicService.findById(id);
        if(!optionalCharacteristic.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Characteristic found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(characteristicService.update(aCharacteristic, id));
    }


    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCharacteristic(@PathVariable Long id){
        characteristicService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
