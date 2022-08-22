package com.example.demo.API.controller;
import com.example.demo.API.persistence.entities.Image;
import com.example.demo.API.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/images")
public class ImageController {
    @Autowired
    private ImageService imageService;

    @PostMapping
    public ResponseEntity<?> createImage(@RequestBody Image i){
        imageService.save(i);
        return ResponseEntity.ok((HttpStatus.OK));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteImage(@PathVariable Long id){
        imageService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
