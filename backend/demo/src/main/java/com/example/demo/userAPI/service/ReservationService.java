package com.example.demo.userAPI.service;
import com.example.demo.userAPI.persistance.entities.Reservation;
import com.example.demo.userAPI.persistance.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository repository;

    public Reservation save(Reservation r){
        return repository.save(r);
    }

    public List<Reservation> findAll(){
        return repository.findAll();
    }

    public List<Reservation> findByProductId(Long id){
        return repository.findByProductId(id);
    }
}
