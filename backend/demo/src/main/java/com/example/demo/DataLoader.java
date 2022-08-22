package com.example.demo;
import com.example.demo.API.persistence.entities.Category;
import com.example.demo.API.persistence.entities.Image;
import com.example.demo.API.persistence.entities.Product;
import com.example.demo.API.persistence.repository.CategoryRepository;
import com.example.demo.API.persistence.repository.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader /*implements ApplicationRunner*/ {
    private CategoryRepository categoryRepository;
    private ImageRepository imageRepository;

    /*@Autowired
    public DataLoader(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    /*public void run(ApplicationArguments args) {
            categoryRepository.save(new Category("Economicos", "descripción", "https://images.pexels.com/photos/1007410/pexels-photo-1007410.jpeg?cs=srgb&dl=pexels-mike-b-1007410.jpg&fm=jpg",new Product()));
            categoryRepository.save(new Category("Deportivos", "descripción", "https://images.pexels.com/photos/217326/pexels-photo-217326.jpeg?cs=srgb&dl=pexels-mike-b-217326.jpg&fm=jpg",new Product()));
            categoryRepository.save(new Category("De Lujo", "descripción", "https://images.pexels.com/photos/1164778/pexels-photo-1164778.jpeg?cs=srgb&dl=pexels-christian-1164778.jpg&fm=jpg",new Product()));
            categoryRepository.save(new Category("Minivan", "descripcion", "https://images.pexels.com/photos/11139392/pexels-photo-11139392.jpeg?cs=srgb&dl=pexels-hasan-gulec-11139392.jpg&fm=jpg",new Product()));
    }

    @Autowired
    public DataLoader(ImageRepository imageRepository){
        this.imageRepository = imageRepository;
    }

    public void run(ApplicationArguments args){
        ImageRepository.save(new Image("Imagen 1", "https://www.infobae.com/autos/2021/12/26/los-9-autos-con-disenos-mas-disruptivos-e-innovadores-de-2021/",new Product()));
        ImageRepository.save(new Image("Imagen 2", "https://www.flickr.com/photos/35232689@N02/3914664362",new Product()));
        ImageRepository.save(new Image("Imagen 3", "https://es.motor1.com/news/424787/ferrari-enzo-vendido-tres-millones/",new Product()));
        ImageRepository.save(new Image("Imagen 4", "https://www.gq.com.mx/estilo-de-vida/articulo/autos-que-superan-las-200-mph",new Product()));
        ImageRepository.save(new Image("Imagen 5", "https://ar.pinterest.com/pin/421086633891965016/",new Product()));

    }
    */

}
