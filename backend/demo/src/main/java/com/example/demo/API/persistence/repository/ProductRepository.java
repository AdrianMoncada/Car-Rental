package com.example.demo.API.persistence.repository;
import java.util.List;
import com.example.demo.API.persistence.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT products.*, categories.id FROM products INNER JOIN categories ON products.categories_id = categories.id WHERE categories.id = (:id);", nativeQuery = true)
    List<Product> findByCategoryId(@Param("id") Long id);

    @Query(value = " SELECT products.*, cities.id FROM products INNER JOIN cities ON products.city_id = cities.id WHERE cities.id =(:id)", nativeQuery = true)
    List<Product> findByCityId(@Param("id") Long id);

}
