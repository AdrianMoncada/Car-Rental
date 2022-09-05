package com.example.demo.API.service;
import com.example.demo.API.persistence.entities.Image;
import com.example.demo.API.persistence.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
    @Autowired
    ImageRepository imageRepository;

    public Image save(Image i){
        return imageRepository.save(i);
    }

    public String delete(Long id){
        imageRepository.deleteById(id);
        return "Image with id: "+ id + " was deleted. ";
    }
}
