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
@NoArgsConstructor
@AllArgsConstructor
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

    @JsonManagedReference(value="user-reservation")
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
    private Set<Reservation> reservations = new HashSet<>();

    @JoinColumn(name = "role_id")
    @ManyToOne(fetch = FetchType.EAGER)
    private Role role;

    public User(String firstName, String lastName, String email, String password, Role role) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    public User(String firstName, String lastName, String email, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }
}
