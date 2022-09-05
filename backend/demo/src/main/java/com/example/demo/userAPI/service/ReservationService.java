package com.example.demo.userAPI.service;
import com.example.demo.userAPI.persistance.entities.Reservation;
import com.example.demo.userAPI.persistance.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ReservationService {

    @Autowired
    ReservationRepository repository;

    public Reservation save(Reservation r){
        System.out.println(r.getProduct());
        System.out.println(r.getUser());
        return repository.save(r);
    }

    public List<Reservation> findALl(){
        return repository.findAll();
    }
}
