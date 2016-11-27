package co.puj.javeriana.web.controllers;

import co.puj.javeriana.web.services.BookmarkService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by sweb on 18/10/2016.
 */

@RestController
public class BookmarkResource {

    private final BookmarkService bookmarkService;

    public BookmarkResource(BookmarkService bookmarkService) {
        this.bookmarkService = bookmarkService;
    }

    @GetMapping(value = "/rest/bookmarks")
    public List<Bookmark> getAll(){
        return bookmarkService.findAll();
    }

    @PostMapping(value = "/rest/bookmarks")
    public void insert(@RequestBody Bookmark bookmark){
        bookmarkService.save(bookmark);
    }

    @DeleteMapping(value = "/rest/bookmarks/{id}")
    public void delete (@PathVariable("id") long id){
        bookmarkService.delete(id);
    }

    @PutMapping(value = "/rest/bookmarks")
    public void update (@RequestBody Bookmark bookmark){
        bookmarkService.save(bookmark);
    }

    @GetMapping(value = "/rest/bookmarks/{id}")
    public  Bookmark getById (@PathVariable("id") long id){
        return bookmarkService.findOne(id);
    }
}
