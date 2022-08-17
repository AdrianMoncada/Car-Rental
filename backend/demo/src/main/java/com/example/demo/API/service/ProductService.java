package com.example.demo.API.service;


import com.example.demo.API.persistence.entities.Product;
import com.example.demo.API.persistence.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public Product save(Product p) {
        return productRepository.save(p);
    }

    public List<Product> getAll() {
        return productRepository.findAll();
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }

    public String delete(Long id) {
        productRepository.deleteById(id);
        return "Product with id: "+ id + " was deleted. ";
    }

    public Optional<Product> update(Product p, Long id) {
        if(productRepository.findById(id).isPresent()){
            Product modifiedP = productRepository.findById(id).get();
            modifiedP.setTitle(p.getTitle());
            modifiedP.setCategory(p.getCategory());
            modifiedP.setCharacteristic(p.getCharacteristic());
            modifiedP.setCity(p.getCity());
            //modifiedP.setImage(p.getImage());

            productRepository.save(modifiedP);
            return findById(id);
        } else {
            return null;
        }
    }

}
