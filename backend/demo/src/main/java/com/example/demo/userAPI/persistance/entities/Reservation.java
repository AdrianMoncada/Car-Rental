package com.example.demo.userAPI.persistance.entities;
import com.example.demo.API.persistence.entities.Product;
import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.sql.Date;

@Getter
@Setter
@ToString
@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @SequenceGenerator(name = "address_sequence", sequenceName = "address_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "address_sequence")
    private Long id;

    private Date startHour;

    private Date startDate;

    private Date endDate;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "product")
    Product product;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY,optional = false)
    @JoinColumn(name = "user")
    User user;

    public Reservation(Date startHour, Date startDate, Date endDate, Product product, User user) {
        this.startHour = startHour;
        this.startDate = startDate;
        this.endDate = endDate;
        this.product = product;
        this.user = user;
    }
}
