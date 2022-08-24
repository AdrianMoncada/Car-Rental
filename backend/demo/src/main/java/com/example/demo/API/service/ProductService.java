package com.example.demo.API.service;
import com.example.demo.API.persistence.DTO.ProductDto;
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
        /*productDto.setCharacteristics(product.getCharacteristics());*/

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

    public Optional<Product> update(Product p, Long id) {
        if(productRepository.findById(id).isPresent()){
            Product modifiedP = productRepository.findById(id).get();
            modifiedP.setName(p.getName());
            modifiedP.setCategory(p.getCategory());
            /*modifiedP.setCharacteristics(p.getCharacteristics());*/
            modifiedP.setCity(p.getCity());
            //modifiedP.setImage(p.getImage());

            productRepository.save(modifiedP);
            return findById(id);
        } else {
            return null;
        }
    }

}
