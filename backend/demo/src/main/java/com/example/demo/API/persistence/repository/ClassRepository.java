package com.example.demo.API.persistence.repository;
import com.example.demo.API.persistence.entities.Class;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClassRepository extends JpaRepository<Class, Long>{
}
