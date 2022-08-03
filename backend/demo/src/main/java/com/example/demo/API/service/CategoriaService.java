package com.example.demo.API.service;
import com.example.demo.API.persistence.repository.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.API.persistence.entities.Categoria;
import java.util.List;

@Service
public class CategoriaService {
    @Autowired
    CategoriaRepository repository;

    public Categoria save(Categoria c) {
        return repository.save(c);
    }

    public List<Categoria> getAll() {
        return repository.findAll();
    }

    public Categoria getById(Long id) {
            Categoria categoria = repository.findById(id).get();
            return categoria;
    }

    public String delete(Long id) {
        repository.deleteById(id);
        return "Categoría with id: "+ id + " was deleted. ";
    }

    public String update(Categoria c) {
        Long id = c.getId();

        if(repository.findById(id).isPresent()){
            Categoria modifiedC = repository.findById(id).get();
            modifiedC.setTitulo(c.getTitulo());
            modifiedC.setDescripcion(c.getDescripcion());
            modifiedC.setUrl(c.getUrl());

            repository.save(modifiedC);
            return "Categoria with id: " + id + " was modified.";
        } else {
            return "Categoria with id: " + id + " doesn't exist";
        }
    }
}
