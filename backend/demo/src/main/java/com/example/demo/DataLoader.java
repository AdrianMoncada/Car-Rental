package com.example.demo;
import com.example.demo.API.persistence.entities.Category;
import com.example.demo.API.persistence.entities.Product;
import com.example.demo.API.persistence.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader /*implements ApplicationRunner*/ {
    private CategoryRepository categoryRepository;

    /*@Autowired
    public DataLoader(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    /*public void run(ApplicationArguments args) {
            categoryRepository.save(new Category("Economicos", "descripción", "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?cs=srgb&dl=pexels-mike-b-1007410.jpg&fm=jpg",new Product()));
            categoryRepository.save(new Category("Deportivos", "descripción", "https://images.pexels.com/photos/217326/pexels-photo-217326.jpeg?cs=srgb&dl=pexels-mike-b-217326.jpg&fm=jpg",new Product()));
            categoryRepository.save(new Category("De Lujo", "descripción", "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?cs=srgb&dl=pexels-christian-1164778.jpg&fm=jpg",new Product()));
            categoryRepository.save(new Category("Minivan", "descripcion", "https://images.pexels.com/photos/11139392/pexels-photo-11139392.jpeg?cs=srgb&dl=pexels-hasan-gulec-11139392.jpg&fm=jpg",new Product()));
    }*/
}
