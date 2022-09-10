package com.example.demo.userAPI.controller;
import com.example.demo.userAPI.persistance.entities.Reservation;
import com.example.demo.userAPI.persistance.entities.ReservationDTO;
import com.example.demo.userAPI.service.ReservationDTOService;
import com.example.demo.userAPI.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;


@RestController
@RequestMapping("/reservations")
public class ReservationController {
    @Autowired
    ReservationService service;

    @Autowired
    ReservationDTOService serviceDTO;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody Reservation r){
        return ResponseEntity.status(HttpStatus.OK).body(service.save(r));
    }

    @PostMapping("JWT")
    public ResponseEntity<?> create(HttpServletRequest request, @RequestBody Reservation r){
        return ResponseEntity.status(HttpStatus.OK).body(service.save(r));
    }



    @GetMapping
    public ResponseEntity<?> findAll(){
        return ResponseEntity.status(HttpStatus.OK).body(service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> findByProductId(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(service.findByProductId(id));
    }
}
