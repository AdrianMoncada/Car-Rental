package com.example.demo.userAPI.persistance.repository;
import com.example.demo.userAPI.persistance.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
}
