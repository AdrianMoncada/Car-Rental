package com.example.demo.userAPI.controller;

import com.example.demo.userAPI.persistance.entities.Reservation;
import com.example.demo.userAPI.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/reservations")
public class ReservationController {
    @Autowired
    ReservationService service;

    @PostMapping
    public String create(@RequestBody Reservation r){
        Reservation reserva = service.save(r);
        service.save(r);
        return "Reservation saved";
    }
}
