package com.example.demo.API.service;
import com.example.demo.API.persistence.entities.Characteristic;
import com.example.demo.API.persistence.repository.CharacteristicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
@Service
public class CharacteristicService {
    @Autowired
    CharacteristicRepository characteristicRepository;

    public Characteristic save(Characteristic characteristic) {
        return characteristicRepository.save(characteristic);
    }

    public List<Characteristic> getAll() {
        return characteristicRepository.findAll();
    }

    public Optional<Characteristic> findById(Long id) {
        return characteristicRepository.findById(id);
    }

    public String delete(Long id) {
        characteristicRepository.deleteById(id);
        return "Characteristic with id: "+ id + " was deleted. ";
    }

    public Optional<Characteristic> update(Characteristic c, Long id) {
        if(characteristicRepository.findById(id).isPresent()){
            Characteristic modifiedC = characteristicRepository.findById(id).get();
            modifiedC.setName(c.getName());
            /*modifiedC.setProduct(c.getProduct());*/


            characteristicRepository.save(modifiedC);
            return findById(id);
        } else {
            return null;
        }
    }



}
