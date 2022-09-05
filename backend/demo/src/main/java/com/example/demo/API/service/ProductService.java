package com.example.demo.API.service;
import com.example.demo.API.persistence.DTO.ProductDto;
import com.example.demo.API.persistence.entities.Product;
import com.example.demo.API.persistence.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public Product save(Product p) {
        /*System.out.println("caracteristicas: " + p.getCharacteristics());*/

        return productRepository.save(p);
    }

    public List<ProductDto> getAllProductDTO(){
        return productRepository.findAll()
                .stream()
                .map(this::convertDTOtoEntitie)
                .collect(Collectors.toList());
    }

    private ProductDto convertDTOtoEntitie(Product product){
        ProductDto productDto = new ProductDto();
        productDto.setId(product.getId());
        productDto.setName(product.getName());
        productDto.setCategory(product.getCategory());
        productDto.setCity(product.getCity());
        productDto.setImages(product.getImages());
        productDto.setDescription(product.getDescription());
        productDto.setCharacteristics(product.getCharacteristics());
        productDto.setMainImage(product.getMainImage());

        return productDto;
    }

    public Optional<Product> findById(Long id) {
        return productRepository.findById(id);
    }
    public List<ProductDto> findBydDTO(Long id){
        return productRepository.findById(id)
                .stream()
                .map(this::convertDTOtoEntitie)
                .collect(Collectors.toList());
    }

    public String delete(Long id) {
        productRepository.deleteById(id);
        return "Product with id: "+ id + " was deleted. ";
    }

    public List<Product> findByCategoryId(Long id) {
        return productRepository.findByCategoryId(id);
    }

    public List<Product> findByCityId(Long id) {
        return productRepository.findByCityId(id);
    }

    public Optional<Product> update(Product p, Long id) {
        if(productRepository.findById(id).isPresent()){
            Product modifiedP = productRepository.findById(id).get();
            modifiedP.setName(p.getName());
            modifiedP.setCategory(p.getCategory());
            modifiedP.setCity(p.getCity());
            productRepository.save(modifiedP);
            return findById(id);
        } else {
            return null;
        }
    }



}
