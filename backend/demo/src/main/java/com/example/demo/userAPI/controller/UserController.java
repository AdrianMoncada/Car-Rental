package com.example.demo.userAPI.controller;
import com.example.demo.API.Exceptions.BadRequestException;
import com.example.demo.userAPI.persistance.entities.User;
import com.example.demo.userAPI.service.UserService;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserService userService;

    @RequestMapping(value = "api/users", method = RequestMethod.POST)
    public void create(@RequestBody User user) throws BadRequestException {

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        String hash = argon2.hash(1, 1024, 1, user.getPassword());
        user.setPassword(hash);

        userService.save(user);
    }
}
