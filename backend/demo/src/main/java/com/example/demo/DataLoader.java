package com.example.demo;
import com.example.demo.API.persistence.entities.*;
import com.example.demo.API.persistence.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {
    private CityRepository cityRepository;
    private CategoryRepository categoryRepository;
    private ProductRepository productRepository;
    private ImageRepository imageRepository;
    /*private CharacteristicRepository characteristicRepository;*/

    @Autowired
    public DataLoader(CityRepository cityRepository, CategoryRepository categoryRepository, ProductRepository productRepository, ImageRepository imageRepository/*, CharacteristicRepository characteristicRepository*/) {
        this.cityRepository = cityRepository;
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.imageRepository = imageRepository;
        /*this.characteristicRepository = characteristicRepository;*/
    }

    public void run(ApplicationArguments args) {
            cityRepository.save(new City("Buenos Aires"));
            cityRepository.save(new City("Córdoba"));
            cityRepository.save(new City("Medellín"));
            cityRepository.save(new City("Bogotá"));

            categoryRepository.save(new Category("Económicos", "https://morgam-images.s3.us-east-2.amazonaws.com/categories/economico-chevrolet-spark.png"));
            categoryRepository.save(new Category("Suvs", "https://morgam-images.s3.us-east-2.amazonaws.com/categories/suv-chevrolet-captiva.png"));
            categoryRepository.save(new Category("Camionetas", "https://morgam-images.s3.us-east-2.amazonaws.com/categories/camioneta-chevrolet-tracker.png"));
            categoryRepository.save(new Category("De lujo", "https://morgam-images.s3.us-east-2.amazonaws.com/categories/de-lujo-ford-focus.png"));

            /*CHEVROLET SPARK*/
            productRepository.save(new Product("Chevrolet Spark", categoryRepository.getReferenceById(1L), cityRepository.getReferenceById(1L), "Descripción Chevrolet Spark"));

            imageRepository.save(new Image("chevrolet-spark-00", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-00.jpg", productRepository.getReferenceById(1L)));
            imageRepository.save(new Image("chevrolet-spark-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-01.jpg", productRepository.getReferenceById(1L)));
            imageRepository.save(new Image("chevrolet-spark-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-02.jpg", productRepository.getReferenceById(1L)));
            imageRepository.save(new Image("chevrolet-spark-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-03.jpg", productRepository.getReferenceById(1L)));
            imageRepository.save(new Image("chevrolet-spark-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-04.jpg", productRepository.getReferenceById(1L)));
            imageRepository.save(new Image("chevrolet-spark-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-05.jpg", productRepository.getReferenceById(1L)));

            /*characteristicRepository.save(new Characteristic("Caja Manual", productRepository.getReferenceById(1L)));
            characteristicRepository.save(new Characteristic("4 Puertas", productRepository.getReferenceById(1L)));
            characteristicRepository.save(new Characteristic("Aire Acondicionado", productRepository.getReferenceById(1L)));
            characteristicRepository.save(new Characteristic("5 Asientos", productRepository.getReferenceById(1L)));*/

            /*HYUNDAI TUCSON*/
            productRepository.save(new Product("Hyundai Tucson", categoryRepository.getReferenceById(2L), cityRepository.getReferenceById(1L), "Descripción Hyundai Tucson"));

            imageRepository.save(new Image("hyundai-tucson-00", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-00.jpg", productRepository.getReferenceById(2L)));
            imageRepository.save(new Image("hyundai-tucson-00", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-01.jpg", productRepository.getReferenceById(2L)));
            imageRepository.save(new Image("hyundai-tucson-00", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-02.jpg", productRepository.getReferenceById(2L)));
            imageRepository.save(new Image("hyundai-tucson-00", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-03.jpg", productRepository.getReferenceById(2L)));
            imageRepository.save(new Image("hyundai-tucson-00", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-04.jpg", productRepository.getReferenceById(2L)));
            imageRepository.save(new Image("hyundai-tucson-00", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-05.jpg", productRepository.getReferenceById(2L)));

            /*characteristicRepository.save(new Characteristic("Caja Manual", productRepository.getReferenceById(2L)));
            characteristicRepository.save(new Characteristic("4 Puertas", productRepository.getReferenceById(2L)));
            characteristicRepository.save(new Characteristic("Aire Acondicionado", productRepository.getReferenceById(2L)));
            characteristicRepository.save(new Characteristic("5 Asientos", productRepository.getReferenceById(2L)));*/

            /*Ford Focus*/
            productRepository.save(new Product("Ford Focus", categoryRepository.getReferenceById(4L), cityRepository.getReferenceById(2L), "Descripción Hyundai Tucson"));

            imageRepository.save(new Image("ford-focus-00", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-00.jpg", productRepository.getReferenceById(3L)));
            imageRepository.save(new Image("ford-focus-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-01.jpg", productRepository.getReferenceById(3L)));
            imageRepository.save(new Image("ford-focus-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-02.jpg", productRepository.getReferenceById(3L)));
            imageRepository.save(new Image("ford-focus-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-03.jpg", productRepository.getReferenceById(3L)));
            imageRepository.save(new Image("ford-focus-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-04.jpg", productRepository.getReferenceById(3L)));
            imageRepository.save(new Image("ford-focus-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-05.jpg", productRepository.getReferenceById(3L)));

            /*characteristicRepository.save(new Characteristic("Caja Manual", productRepository.getReferenceById(3L)));
            characteristicRepository.save(new Characteristic("4 Puertas", productRepository.getReferenceById(3L)));
            characteristicRepository.save(new Characteristic("Aire Acondicionado", productRepository.getReferenceById(3L)));
            characteristicRepository.save(new Characteristic("5 Asientos", productRepository.getReferenceById(3L)));*/
    }

}
