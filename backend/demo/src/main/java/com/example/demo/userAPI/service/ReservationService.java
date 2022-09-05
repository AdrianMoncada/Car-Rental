package com.example.demo.userAPI.service;
import com.example.demo.userAPI.persistance.entities.Reservation;
import com.example.demo.userAPI.persistance.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository repository;

    public Reservation save(Reservation r){
        System.out.println("objeto parametro: " + r.toString());

        Reservation reserva = r;

        return repository.save(r);
    }
}
