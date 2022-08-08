package com.example.demo.API.service;
import com.example.demo.API.persistence.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.API.persistence.entities.Category;
import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    CategoryRepository repository;

    public Category save(Category c) {
        return repository.save(c);
    }

    public List<Category> getAll() {
        return repository.findAll();
    }

    public Optional<Category> getById(Long id){
            Category aCategory = repository.findById(id).get();
            return Optional.of(aCategory);
    }

    public String delete(Long id) {
        repository.deleteById(id);
        return "Category with id: "+ id + " was deleted. ";
    }

    public Optional<Category> update(Category c, Long id) {
        if(repository.findById(id).isPresent()){
            Category modifiedC = repository.findById(id).get();
            modifiedC.setTitle(c.getTitle());
            modifiedC.setDescription(c.getDescription());
            modifiedC.setUrlImage(c.getUrlImage());

            repository.save(modifiedC);
            return getById(id);
        } else {
            return null;
        }
    }
}
