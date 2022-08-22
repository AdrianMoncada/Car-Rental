package com.example.demo.API.persistence.repository;

import com.example.demo.API.persistence.entities.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface ImageRepository extends JpaRepository<Image, Long> {
}
