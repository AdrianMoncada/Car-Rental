package com.example.demo.API.controller;
import com.example.demo.API.Exceptions.ResourceNotFoundException;
import com.example.demo.API.persistence.entities.Characteristic;
import com.example.demo.API.persistence.repository.CharacteristicRepository;
import com.example.demo.API.persistence.repository.ProductRepository;
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

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CharacteristicRepository characteristicRepository;

    @CrossOrigin
    @GetMapping()
    public List<Characteristic> getAll() {
        return characteristicService.getAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Characteristic> getById(@PathVariable Long id){
        return characteristicService.findById(id);
    }

    @PostMapping
    public ResponseEntity<?> createCharacteristic(@RequestBody Characteristic aCharacteristic){
        characteristicService.save(aCharacteristic);
        return ResponseEntity.ok((HttpStatus.OK));
    }

    @PostMapping("/{productId}")
    public ResponseEntity<Characteristic> addCharacteristic(@PathVariable(value = "productId") Long productId, @RequestBody Characteristic characteristicRequest) {
        Characteristic characteristic = productRepository.findById(productId).map(product -> {
            long characteristicId = characteristicRequest.getId();

            if (characteristicId != 0L) {
                Characteristic _characteristic = characteristicRepository.findById(characteristicId)
                        .orElseThrow(() -> new ResourceNotFoundException("Not found characteristic with id = " + characteristicId));
                product.addCharacteristic(_characteristic);
                productRepository.save(product);
                return _characteristic;
            }
            product.addCharacteristic(characteristicRequest);
            return characteristicRepository.save(characteristicRequest);
        }).orElseThrow(() -> new ResourceNotFoundException("Not found Product with id = " + productId));
        return new ResponseEntity<>(characteristic, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCharacteristic(@RequestBody Characteristic aCharacteristic, @PathVariable Long id){
        Optional<Characteristic> optionalCharacteristic= characteristicService.findById(id);
        if(!optionalCharacteristic.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Characteristic found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(characteristicService.update(aCharacteristic, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCharacteristic(@PathVariable Long id){
        characteristicService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
