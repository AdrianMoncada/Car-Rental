package com.example.demo.userAPI.persistance.repository;

import com.example.demo.userAPI.persistance.entities.ReservationDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationDTORepository extends JpaRepository<ReservationDTO, Long> {
}
