package com.example.demo.userAPI.service;
import com.example.demo.userAPI.persistance.entities.User;
import com.example.demo.userAPI.persistance.repository.UserRepository;
import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository repository;

    public User save(User u){
        return repository.save(u);
    }

    public boolean exist(String email){
        return repository.existsByEmail(email);
    }

    public String delete(Long id){
        repository.deleteById(id);
        return "user id " + id + "was deleted.";
    }

    public List<User> getAll() {
        return repository.findAll();
    }

    public User obtainByCredentials(User user) {
        User userObtained = repository.getByemail(user.getEmail());
        System.out.println("The user is: " + repository.getByemail(user.getEmail()));

        if (userObtained == null) {
            System.out.println("is null.");
            return null;
        }
        System.out.println("is NOT NULL. hashing...");
        String passwordHashed = userObtained.getPassword();

        Argon2 argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        if (argon2.verify(passwordHashed, user.getPassword())) {
            return userObtained;
        }
        return null;
    }
}
