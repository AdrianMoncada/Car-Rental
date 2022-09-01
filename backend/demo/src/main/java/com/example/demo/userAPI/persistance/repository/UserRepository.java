package com.example.demo.userAPI.persistance.repository;
import com.example.demo.userAPI.persistance.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    public User getByemail(String email);
    boolean existsByEmail(String email);

}
