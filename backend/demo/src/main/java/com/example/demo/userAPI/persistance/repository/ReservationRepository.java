package com.example.demo.userAPI.persistance.repository;
import com.example.demo.userAPI.persistance.entities.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    @Query(value = " SELECT reservations.*, products.id FROM reservations INNER JOIN products ON reservations.product = products.id WHERE products.id =(:id)", nativeQuery = true)
    List<Reservation> findByProductId(@Param("id") Long id);
}
