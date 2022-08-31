package com.example.demo.userAPI.persistance.entities;
import com.example.demo.API.persistence.entities.City;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@ToString
@Entity
@Table(name = "users")
public class User {
    @Id
    @SequenceGenerator(name = "address_sequence", sequenceName = "address_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "address_sequence")
    private Long id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    @JsonManagedReference
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<Reservation> reservations = new HashSet<>();

    @JoinColumn(name = "city_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private City city;

    @JoinColumn(name = "role_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Role role;

    public User(String firstName, String lastName, String email, String password, City city, Role role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
        this.role = role;
    }
}
