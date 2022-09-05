package com.example.demo.userAPI.controller;
import com.example.demo.userAPI.persistance.entities.Reservation;
import com.example.demo.userAPI.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/reservations")
public class ReservationController {

    @Autowired
    ReservationService service;

    @GetMapping
    public List<Reservation> findAll(){
        return service.findALl();
    }

    @PostMapping
    public ResponseEntity<?> create(Reservation r){
        return ResponseEntity.ok(service.save(r));
    }
}
