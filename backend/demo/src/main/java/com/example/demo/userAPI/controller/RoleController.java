package com.example.demo.userAPI.controller;
import com.example.demo.userAPI.persistance.entities.Role;
import com.example.demo.userAPI.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

public class RoleController {
    @Autowired
    private RoleService roleService;

    @CrossOrigin
    @GetMapping()
    public List<Role> getAll() {
        return roleService.getAll();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    public Optional<Role> getById(@PathVariable Long id){
        return roleService.findById(id);
    }

    @PostMapping
    public ResponseEntity<?> createClass(@RequestBody Role aRole){
        roleService.save(aRole);
        return ResponseEntity.ok((HttpStatus.OK));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateCategory(@RequestBody Role aRole, @PathVariable Long id){
        Optional<Role> optionalRole= roleService.findById(id);
        if(!optionalRole.isPresent()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No Role found with id: " + id);
        }
        return ResponseEntity.status(HttpStatus.OK).body(roleService.update(aRole, id));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteClass(@PathVariable Long id){
        roleService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
