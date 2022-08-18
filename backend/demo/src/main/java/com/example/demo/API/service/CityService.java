package com.example.demo.API.service;

import com.example.demo.API.persistence.entities.City;
import com.example.demo.API.persistence.repository.CityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class CityService {
    @Autowired
    CityRepository cityRepository;

    public City save(City c) {
        return cityRepository.save(c);
    }

    public List<City> getAll() {
        return cityRepository.findAll();
    }

    public Optional<City> findById(Long id) {
        return cityRepository.findById(id);
    };

    public String delete(Long id) {
        cityRepository.deleteById(id);
        return "City with id: "+ id + " was deleted. ";
    }

    public Optional<City> update(City c, Long id) {
        if(cityRepository.findById(id).isPresent()){
            City modifiedC = cityRepository.findById(id).get();
            modifiedC.setTitleCity(c.getTitleCity());
            modifiedC.setProduct(c.getProduct());



            cityRepository.save(modifiedC);
            return findById(id);
        } else {
            return null;
        }
    }
}
