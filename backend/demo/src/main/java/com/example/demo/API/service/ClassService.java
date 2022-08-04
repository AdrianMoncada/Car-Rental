package com.example.demo.API.service;
import com.example.demo.API.persistence.repository.ClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.API.persistence.entities.Class;
import java.util.List;

@Service
public class ClassService {
    @Autowired
    ClassRepository repository;

    public Class save(Class c) {
        return repository.save(c);
    }

    public List<Class> getAll() {
        return repository.findAll();
    }

    public Class getById(Long id) {
            Class aClass = repository.findById(id).get();
            return aClass;
    }

    public String delete(Long id) {
        repository.deleteById(id);
        return "Class with id: "+ id + " was deleted. ";
    }

    public String update(Class c) {
        Long id = c.getId();

        if(repository.findById(id).isPresent()){
            Class modifiedC = repository.findById(id).get();
            modifiedC.setTitle(c.getTitle());
            modifiedC.setDescription(c.getDescription());
            modifiedC.setUrlImage(c.getUrlImage());

            repository.save(modifiedC);
            return "Class with id: " + id + " was modified.";
        } else {
            return "Class with id: " + id + " doesn't exist";
        }
    }
}
