package com.example.demo.API.persistence.repository;

import com.example.demo.API.persistence.entities.Characteristic;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CharacteristicRepository extends JpaRepository<Characteristic, Long> {
}
