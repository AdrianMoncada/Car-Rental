package com.example.demo.userAPI.service;

import com.example.demo.userAPI.persistance.entities.ReservationDTO;
import com.example.demo.userAPI.persistance.entities.Role;
import com.example.demo.userAPI.persistance.repository.ReservationDTORepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationDTOService {

    @Autowired
    ReservationDTORepository repository;

    public ReservationDTO save(ReservationDTO r) {
        return repository.save(r);
    }
}
