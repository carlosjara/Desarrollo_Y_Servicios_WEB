package co.puj.javeriana.web.services;

import co.puj.javeriana.web.controllers.Bookmark;
import co.puj.javeriana.web.persistence.BookmarkDB;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by CarlosEnrique on 20/10/2016.
 */
@Service
public class BookmarkService {
    private BookmarkDB bookmarkDB;

    public BookmarkService(BookmarkDB bookmarkDB) {
        this.bookmarkDB = bookmarkDB;
    }

    public List<Bookmark> findAll() {
        return this.bookmarkDB.findAll();
    }

    public void save(Bookmark bookmark) {
        this.bookmarkDB.save(bookmark);
    }

    public void delete(long id) {
        this.bookmarkDB.delete(id);
    }

    public Bookmark findOne(long id) {
        return this.bookmarkDB.findOne(id);
    }
}
