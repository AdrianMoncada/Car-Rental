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

    private LocalDateTime startHour;

    private LocalDate startDate;

    private LocalDate endDate;

    @JsonBackReference(value="product-reservation")
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "product")
    Product product;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "user")
    User user;

    public Reservation(LocalDateTime startHour, LocalDate startDate, LocalDate endDate,User user, Product product) {
        this.startHour = startHour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.user = user;
        this.product = product;
    }

    public Reservation(LocalDate startDate, LocalDate endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}
