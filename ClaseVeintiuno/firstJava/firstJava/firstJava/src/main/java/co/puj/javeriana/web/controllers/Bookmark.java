package co.puj.javeriana.web.controllers;

import javax.persistence.*;

/**
 * Created by Carlos Jaramillo on 18/10/2016.
 */

/**
 * En la representacion de la clase como Tabla
 */

@Entity
public class Bookmark {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long id;
    @Column
    private  String name;
    @Column
    private  String link;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
