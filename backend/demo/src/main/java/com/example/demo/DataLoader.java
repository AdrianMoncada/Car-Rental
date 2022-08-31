package com.example.demo;
import com.example.demo.API.controller.CharacteristicController;
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

    private CharacteristicController characteristicController;

    private CharacteristicRepository characteristicRepository;

    @Autowired
    public DataLoader(CityRepository cityRepository, CategoryRepository categoryRepository, ProductRepository productRepository, ImageRepository imageRepository, CharacteristicRepository characteristicRepository, CharacteristicController characteristicController) {
        this.cityRepository = cityRepository;
        this.categoryRepository = categoryRepository;
        this.productRepository = productRepository;
        this.imageRepository = imageRepository;
        this.characteristicRepository = characteristicRepository;
        this.characteristicController = characteristicController;
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
            productRepository.save(new Product("Chevrolet Spark", categoryRepository.getReferenceById(1L), cityRepository.getReferenceById(1L), "Vehículo compacto, es una alternativa urbana ideal para desplazarse con agilidad dentro de la ciudad.","https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-00.jpg"));

            imageRepository.save(new Image("chevrolet-spark-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-01.jpg", productRepository.getReferenceById(1L)));
            imageRepository.save(new Image("chevrolet-spark-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-02.jpg", productRepository.getReferenceById(1L)));
            imageRepository.save(new Image("chevrolet-spark-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-03.jpg", productRepository.getReferenceById(1L)));
            imageRepository.save(new Image("chevrolet-spark-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-04.jpg", productRepository.getReferenceById(1L)));
            imageRepository.save(new Image("chevrolet-spark-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-spark-05.jpg", productRepository.getReferenceById(1L)));

            characteristicRepository.save(new Characteristic("Caja Manual"));
            characteristicRepository.save(new Characteristic("Caja Automática"));
            characteristicRepository.save(new Characteristic("4 Puertas"));
            characteristicRepository.save(new Characteristic("Aire Acondicionado"));
            characteristicRepository.save(new Characteristic("5 Asientos"));

            /*HYUNDAI TUCSON*/
            productRepository.save(new Product("Hyundai Tucson", categoryRepository.getReferenceById(2L), cityRepository.getReferenceById(1L), "SUV compacto todoterreno, con capacidad para 7 personas. Ideal para viajar.", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-00.jpg"));

            imageRepository.save(new Image("hyundai-tucson-00", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-01.jpg", productRepository.getReferenceById(2L)));
            imageRepository.save(new Image("hyundai-tucson-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-02.jpg", productRepository.getReferenceById(2L)));
            imageRepository.save(new Image("hyundai-tucson-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-03.jpg", productRepository.getReferenceById(2L)));
            imageRepository.save(new Image("hyundai-tucson-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-04.jpg", productRepository.getReferenceById(2L)));
            imageRepository.save(new Image("hyundai-tucson-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/hyundai-tucson-05.jpg", productRepository.getReferenceById(2L)));




           /* Ford Focus*/
            productRepository.save(new Product("Ford Focus", categoryRepository.getReferenceById(4L), cityRepository.getReferenceById(2L), "Vehiculo compacto, con todas las comodidades en su interior.", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-00.jpg"));

            imageRepository.save(new Image("ford-focus-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-01.jpg", productRepository.getReferenceById(3L)));
            imageRepository.save(new Image("ford-focus-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-02.jpg", productRepository.getReferenceById(3L)));
            imageRepository.save(new Image("ford-focus-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-03.jpg", productRepository.getReferenceById(3L)));
            imageRepository.save(new Image("ford-focus-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-04.jpg", productRepository.getReferenceById(3L)));
            imageRepository.save(new Image("ford-focus-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/ford-focus-05.jpg", productRepository.getReferenceById(3L)));

            /*Jeep Cherokee*/
            productRepository.save(new Product("Jeep Cherokee", categoryRepository.getReferenceById(3L), cityRepository.getReferenceById(2L), "SUV de tamaño medio, con amplitud en su interior para que todos sus ocupantes viajen con comodidad.", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/jeep-cherokee-00.jpg"));

            imageRepository.save(new Image("jeep-cherokee-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/jeep-cherokee-01.jpg", productRepository.getReferenceById(4L)));
            imageRepository.save(new Image("jeep-cherokee-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/jeep-cherokee-02.jpg", productRepository.getReferenceById(4L)));
            imageRepository.save(new Image("jeep-cherokee-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/jeep-cherokee-03.jpg", productRepository.getReferenceById(4L)));
            imageRepository.save(new Image("jeep-cherokee-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/jeep-cherokee-04.jpg", productRepository.getReferenceById(4L)));
            imageRepository.save(new Image("jeep-cherokee-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/jeep-cherokee-05.jpg", productRepository.getReferenceById(4L)));

            /*Kia Picanto - kia-picanto*/
        productRepository.save(new Product("Kia Picanto", categoryRepository.getReferenceById(1L), cityRepository.getReferenceById(3L), "Vehículo compacto comodo para circular en la ciudad.", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/kia-picanto-00.jpg"));

        imageRepository.save(new Image("kia-picanto-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/kia-picanto-01.jpg", productRepository.getReferenceById(5L)));
        imageRepository.save(new Image("kia-picanto-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/kia-picanto-02.jpg", productRepository.getReferenceById(5L)));
        imageRepository.save(new Image("kia-picanto-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/kia-picanto-03.jpg", productRepository.getReferenceById(5L)));
        imageRepository.save(new Image("kia-picanto-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/kia-picanto-04.jpg", productRepository.getReferenceById(5L)));
        imageRepository.save(new Image("kia-picanto-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/kia-picanto-005.jpg", productRepository.getReferenceById(5L)));

            /*Chevrolet Captiva - chevrolet-captiva*/
        productRepository.save(new Product("Chevrolet Captiva", categoryRepository.getReferenceById(2L), cityRepository.getReferenceById(3L), "SUV todoterreno, amplia en su interior para viajar con todo el conford.", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-captiva-00.jpg"));

        imageRepository.save(new Image("chevrolet-captiva-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-captiva-01.jpg", productRepository.getReferenceById(6L)));
        imageRepository.save(new Image("chevrolet-captiva-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-captiva-02.jpg", productRepository.getReferenceById(6L)));
        imageRepository.save(new Image("chevrolet-captiva-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-captiva-03.jpg", productRepository.getReferenceById(6L)));
        imageRepository.save(new Image("chevrolet-captiva-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-captiva-04.jpg", productRepository.getReferenceById(6L)));
        imageRepository.save(new Image("chevrolet-captiva-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-captiva-05.jpg", productRepository.getReferenceById(6L)));

        /*Chevrolet Tracker - chevrolet-tracker*/
        productRepository.save(new Product("Chevrolet Tracker", categoryRepository.getReferenceById(3L), cityRepository.getReferenceById(4L),"Vehículo con amplio espacio interior, ideal para viajes.", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-tracker-00.jpg"));

        imageRepository.save(new Image("chevrolet-tracker-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-tracker-01.jpg", productRepository.getReferenceById(7L)));
        imageRepository.save(new Image("chevrolet-tracker-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-tracker-02.jpg", productRepository.getReferenceById(7L)));
        imageRepository.save(new Image("chevrolet-tracker-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-tracker-03.jpg", productRepository.getReferenceById(7L)));
        imageRepository.save(new Image("chevrolet-tracker-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-tracker-04.jpg", productRepository.getReferenceById(7L)));
        imageRepository.save(new Image("chevrolet-tracker-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-tracker-05.jpg", productRepository.getReferenceById(7L)));

        /*Chevrolet Cruze - chevrolet-cruze*/
        productRepository.save(new Product("Chevrolet Cruze", categoryRepository.getReferenceById(4L), cityRepository.getReferenceById(4L), "Un vehículo ágil y moderno.", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-cruze-00.jpg"));

        imageRepository.save(new Image("chevrolet-cruze-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-cruze-01.jpg", productRepository.getReferenceById(8L)));
        imageRepository.save(new Image("chevrolet-cruze-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-cruze-02.jpg", productRepository.getReferenceById(8L)));
        imageRepository.save(new Image("chevrolet-cruze-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-cruze-03.jpg", productRepository.getReferenceById(8L)));
        imageRepository.save(new Image("chevrolet-cruze-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-cruze-04.jpg", productRepository.getReferenceById(8L)));
        imageRepository.save(new Image("chevrolet-cruze-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-cruze-05.jpg", productRepository.getReferenceById(8L)));

        /*Chevrolet Sail - chevrolet-sail*/
        productRepository.save(new Product("Chevrolet Sail", categoryRepository.getReferenceById(1L), cityRepository.getReferenceById(4L), "Description Sail", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-sail-00.jpg"));

        imageRepository.save(new Image("chevrolet-sail-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-sail-01.jpg", productRepository.getReferenceById(9L)));
        imageRepository.save(new Image("chevrolet-sail-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-sail-02.jpg", productRepository.getReferenceById(9L)));
        imageRepository.save(new Image("chevrolet-sail-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-sail-03.jpg", productRepository.getReferenceById(9L)));
        imageRepository.save(new Image("chevrolet-sail-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-sail-04.jpg", productRepository.getReferenceById(9L)));
        imageRepository.save(new Image("chevrolet-sail-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-sail-05.jpg", productRepository.getReferenceById(9L)));

        /*Chevrolet Onix - chevrolet-onix*/
        productRepository.save(new Product("Chevrolet Onix", categoryRepository.getReferenceById(1L), cityRepository.getReferenceById(3L), "Description Onix", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-onix-00.jpg"));

        imageRepository.save(new Image("chevrolet-onix-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-onix-01.jpg", productRepository.getReferenceById(10L)));
        imageRepository.save(new Image("chevrolet-onix-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-onix-02.jpg", productRepository.getReferenceById(10L)));
        imageRepository.save(new Image("chevrolet-onix-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-onix-03.jpg", productRepository.getReferenceById(10L)));
        imageRepository.save(new Image("chevrolet-onix-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-onix-04.jpg", productRepository.getReferenceById(10L)));
        imageRepository.save(new Image("chevrolet-onix-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-onix-05.jpg", productRepository.getReferenceById(10L)));

        /*FIAT Argo - fiat-argo*/

        productRepository.save(new Product("Fiat Argo", categoryRepository.getReferenceById(1L), cityRepository.getReferenceById(2L), "Description Argo", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/fiat-argo-00.jpg"));

        imageRepository.save(new Image("fiat-argo-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/fiat-argo-01.jpg", productRepository.getReferenceById(11L)));
        imageRepository.save(new Image("fiat-argo-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/fiat-argo-02.jpg", productRepository.getReferenceById(11L)));
        imageRepository.save(new Image("fiat-argo-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/fiat-argo-03.jpg", productRepository.getReferenceById(11L)));
        imageRepository.save(new Image("fiat-argo-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/fiat-argo-04.jpg", productRepository.getReferenceById(11L)));
        imageRepository.save(new Image("fiat-argo-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/fiat-argo-05.jpg", productRepository.getReferenceById(11L)));

        /*Chevrolet Camaro - chevrolet-camaro*/

        productRepository.save(new Product("Chevrolet Camaro", categoryRepository.getReferenceById(4L), cityRepository.getReferenceById(1L), "Description Camaro", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-camaro-00.jpg"));

        imageRepository.save(new Image("chevrolet-camaro-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-camaro-01.jpg", productRepository.getReferenceById(12L)));
        imageRepository.save(new Image("chevrolet-camaro-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-camaro-02.jpg", productRepository.getReferenceById(12L)));
        imageRepository.save(new Image("chevrolet-camaro-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-camaro-03.jpg", productRepository.getReferenceById(12L)));
        imageRepository.save(new Image("chevrolet-camaro-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-camaro-04.jpg", productRepository.getReferenceById(12L)));
        imageRepository.save(new Image("chevrolet-camaro-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-camaro-05.jpg", productRepository.getReferenceById(12L)));

        /*Chevrolet Malibu - chevrolet-malibu*/

        productRepository.save(new Product("Chevrolet Malibu", categoryRepository.getReferenceById(1L), cityRepository.getReferenceById(1L), "Description Malibu", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-malibu-00.jpg"));

        imageRepository.save(new Image("chevrolet-malibu-01", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-malibu-01.jpg", productRepository.getReferenceById(13L)));
        imageRepository.save(new Image("chevrolet-malibu-02", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-malibu-02.jpg", productRepository.getReferenceById(13L)));
        imageRepository.save(new Image("chevrolet-malibu-03", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-malibu-03.jpg", productRepository.getReferenceById(13L)));
        imageRepository.save(new Image("chevrolet-malibu-04", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-malibu-04.jpg", productRepository.getReferenceById(13L)));
        imageRepository.save(new Image("chevrolet-malibu-05", "https://morgam-images.s3.us-east-2.amazonaws.com/cars/chevrolet-malibu-05.jpg", productRepository.getReferenceById(13L)));

    }

}
