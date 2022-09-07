package com.example.demo.userAPI.persistance.repository;
import com.example.demo.userAPI.persistance.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
