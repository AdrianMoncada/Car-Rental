package com.example.demo.userAPI.controller;
import com.example.demo.API.Exceptions.BadRequestException;
import com.example.demo.userAPI.persistance.entities.User;
import com.example.demo.userAPI.service.UserService;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping()
    public List<User> getAll() {
        return service.getAll();
    }

    @PostMapping
    public ResponseEntity<?> create(@RequestBody User user) throws BadRequestException {
        ResponseEntity<String> response = null;
        if(service.exist(user.getEmail())){
            return ResponseEntity.status(HttpStatus.CONFLICT).body("There is an existing account associated with this email");
        }

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1, 1024, 1, user.getPassword());
        user.setPassword(hash);

        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(user));
    }



}
