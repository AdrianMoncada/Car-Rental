package com.example.demo.userAPI.persistance.entities;
import com.example.demo.API.persistence.entities.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@ToString
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "reservations")
public class Reservation {
    @Id
    @SequenceGenerator(name = "address_sequence", sequenceName = "address_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "address_sequence")
    private Long id;

    private Date startHour;

    private Date startDate;

    private Date endDate;

    @NotFound(action = NotFoundAction.IGNORE)
    @JsonBackReference(value="product-reservation")
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "product", nullable = true)
    Product product;

    @JsonBackReference(value="user-reservation")
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "user")
    User user;

    public Reservation(Date startHour, Date startDate, Date endDate, User user, Product product) {
        this.startHour = startHour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.user = user;
    }
}
