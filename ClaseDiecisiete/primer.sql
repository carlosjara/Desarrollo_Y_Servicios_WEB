CREATE SCHEMA `bookmarks` DEFAULT CHARACTER SET utf8 ;
drop table bookmarks.bookmarks; 
CREATE TABLE bookmarks.bookmarks(
	id integer primary key auto_increment,
    name varchar(32),
    link varchar(64)
);

insert into bookmarks.bookmarks (id,name,link) values (1,"Go","http://www.google.com");
insert into bookmarks.bookmarks (id,name,link) values (2,"Fb","http://www.facebook.com");
insert into bookmarks.bookmarks (id,name,link) values (3,"GitHub","https://github.com");
insert into bookmarks.bookmarks (id,name,link) values (4,"Youtube","https://www.youtube.com");
insert into bookmarks.bookmarks (name,link) values ("Youtube","https://www.youtube.com");
SELECT * FROM bookmarks.bookmarks;

SELECT * FROM bookmarks.bookmarks where id = 2;
delete FROM bookmarks.bookmarks where id = 2;

update bookmarks.bookmarks set name="OTRO", link="http://www.google.com" where id = 1