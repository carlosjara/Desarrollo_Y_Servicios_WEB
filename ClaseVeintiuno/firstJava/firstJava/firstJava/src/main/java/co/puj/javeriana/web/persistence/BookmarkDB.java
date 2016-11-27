package co.puj.javeriana.web.persistence;


import co.puj.javeriana.web.controllers.Bookmark;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by sweb on 18/10/2016.
 */
public interface BookmarkDB extends JpaRepository<Bookmark, Long> {

}
