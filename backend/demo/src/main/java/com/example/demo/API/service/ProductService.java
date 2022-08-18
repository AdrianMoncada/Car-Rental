package com.example.demo.API.service;


import com.example.demo.API.persistence.DTO.ProductDTO;
import com.example.demo.API.persistence.entities.Product;
import com.example.demo.API.persistence.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public Product save(Product p) {
        return productRepository.save(p);
    }

    /*public List<Product> getAll() {
        return productRepository.findAll();
    }*/
    public List<ProductDTO> getAllProductDTO(){
        return productRepository.findAll()
                .stream()
                .map(this::convertDTOtoEntitie)
                .collect(Collectors.toList());
    }

    private ProductDTO convertDTOtoEntitie(Product product){
        ProductDTO productDTO = new ProductDTO();
        productDTO.setIdProduct(product.getId());
        productDTO.setTitle(product.getTitle());
        productDTO.setCategory(product.getCategory());
        productDTO.setCharacteristic(product.getCharacteristic());
        productDTO.setCity(product.getCity());
        return productDTO;
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }
    public List<ProductDTO> findBydDTO(Long id){
        return productRepository.findById(id)
                .stream()
                .map(this::convertDTOtoEntitie)
                .collect(Collectors.toList());
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
