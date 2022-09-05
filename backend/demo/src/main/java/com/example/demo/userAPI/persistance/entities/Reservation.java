package com.example.demo.userAPI.persistance.entities;
import com.example.demo.API.persistence.entities.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "reservations")
public class Reservation {
    @Id
    @SequenceGenerator(name = "reservation_sequence", sequenceName = "reservation_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reservation_sequence")
    private Long id;

    private LocalDate startHour;

    private LocalDate startDate;

    private LocalDate endDate;

    /*@JsonBackReference(value="product-reservation")
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "product")
    Product product;*/

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "user")
    User user;

    public Reservation(LocalDate startHour, LocalDate startDate, LocalDate endDate,User user) {
        this.startHour = startHour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.user = user;
    }
}
