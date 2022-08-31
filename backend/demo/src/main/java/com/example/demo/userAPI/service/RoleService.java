package com.example.demo.userAPI.service;
import com.example.demo.userAPI.persistance.entities.Role;
import com.example.demo.userAPI.persistance.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public Role save(Role r) {
        return roleRepository.save(r);
    }

    public List<Role> getAll() {
        return roleRepository.findAll();
    }

    public Optional<Role> findById(Long id) {
        return roleRepository.findById(id);
    }

    public String delete(Long id) {
        roleRepository.deleteById(id);
        return "Role with id: "+ id + " was deleted. ";
    }

    public Optional<Role> update(Role r, Long id) {
        if(roleRepository.findById(id).isPresent()){
            Role modifiedR = roleRepository.findById(id).get();
            modifiedR.setName(r.getName());

            roleRepository.save(modifiedR);
            return findById(id);
        } else {
            return null;
        }
    }
}
