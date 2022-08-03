package com.example.demo.API.controller;

import com.example.demo.API.persistence.entities.Categoria;
import com.example.demo.API.service.categoriaService;
import jdk.jfr.Category;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categorias")
public class categoriaController {

    //Get
    @GetMapping("/{id}")
    public Categoria getCategoria(@PathVariable Long id) {
        return categoriaService.leerCategoria(id);
    }


    //Post
    @PostMapping
    public ResponseEntity<?> crearCategoria(@RequestBody Categoria categoria){
        categoriaService.crearCategoria(categoria);
        return ResponseEntity.ok((HttpStatus.OK));
    }

    //Update
    @PutMapping
    public ResponseEntity<?> cambiarCategoria(@RequestBody Categoria categoria){
        categoriaService.cambiarCategoria(categoria);
        return ResponseEntity.ok(HttpStatus.ok);
    }


    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarCategoria(@PathVariable Long id){
        categoriaService.eliminarCategoria(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
