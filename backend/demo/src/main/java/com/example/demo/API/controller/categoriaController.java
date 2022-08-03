package com.example.demo.API.controller;
import com.example.demo.API.persistence.entities.Categoria;
import com.example.demo.API.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categorias")
public class categoriaController {

    @Autowired
    CategoriaService service;

    //Get
    @GetMapping("/{id}")
    public Categoria getCategoria(@PathVariable Long id) {
        return service.getById(id);
    }


    //Post
    @PostMapping
    public ResponseEntity<?> crearCategoria(@RequestBody Categoria categoria){
        service.save(categoria);
        return ResponseEntity.ok((HttpStatus.OK));
    }

    //Update
    @PutMapping
    public ResponseEntity<?> cambiarCategoria(@RequestBody Categoria categoria){
        service.update(categoria);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    //Delete
    @DeleteMapping("/{id}")
    public ResponseEntity<?> eliminarCategoria(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

}
