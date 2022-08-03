package com.example.demo.API.persistence.entities;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import javax.persistence.*;

@Setter
@Getter
@ToString
@Entity
@Table(name = "categorias")
public class Categoria {
    @Id
    @SequenceGenerator(name = "categoria_sequence", sequenceName = "categoria_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categoria_sequence")
    private Long id;

    @Column
    private String titulo;

    @Column
    private String descripcion;

    @Column
    private String url;


    //Constructor vacio
    public Categoria(){
    }

    //CONSTRUCTOR
    public Categoria(String titulo, String descripcion, String url) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.url = url;
    }
}
