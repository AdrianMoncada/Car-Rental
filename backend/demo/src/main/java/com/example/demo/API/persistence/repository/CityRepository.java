package com.example.demo.API.persistence.repository;

import com.example.demo.API.persistence.entities.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepository extends JpaRepository<City, Long> {
}
