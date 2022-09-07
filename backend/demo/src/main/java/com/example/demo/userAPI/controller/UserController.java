package com.example.demo.userAPI.controller;
import com.example.demo.API.Exceptions.BadRequestException;
import com.example.demo.userAPI.Constants;
import com.example.demo.userAPI.persistance.entities.User;
import com.example.demo.userAPI.service.UserService;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserService service;

    @GetMapping("/tokenFilter")
    public String checkTokenValidation(HttpServletRequest request) {
        return "Usted cuenta con un token válido.";
    }

    @GetMapping()
    public List<User> getAll() {
        return service.getAll();
    }

    @GetMapping("/getByEmail")
    public User getByemail(@RequestBody User user){
        return service.getByemail(user.getEmail());
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

        service.save(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(generateJWTToken(user));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) {
        User loggedUser = service.obtainByCredentials(user);
        if(loggedUser != null){
            return ResponseEntity.status(HttpStatus.OK).body(generateJWTToken(loggedUser));
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect email or password");
    }

    private Map<String, String> generateJWTToken(User user){
        long timestamp = System.currentTimeMillis();
        String token = Jwts.builder().signWith(SignatureAlgorithm.HS256, Constants.API_SECRET_KEY)
                .setIssuedAt(new Date(timestamp))
                .setExpiration(new Date(timestamp + Constants.TOKEN_VALIDITY))
                .claim("id", user.getId())
                .claim("email", user.getEmail())
                .claim("firstName", user.getFirstName())
                .claim("lastName", user.getLastName())
                .compact();
        Map<String, String> map = new HashMap<>();
        map.put("token",token);
        return map;

    }



}
