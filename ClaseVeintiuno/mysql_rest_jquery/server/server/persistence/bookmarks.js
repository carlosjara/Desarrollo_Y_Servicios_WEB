var db = require('./connection');
var exports = module.exports = {};

exports.getAll = function(complete) {
    db.executeSqlFunction (function(connection){
        connection.query('SELECT * from bookmarks', function(err, rows, fields) {
            if (err) throw err;
            complete(rows, fields);
         });
    });
}

exports.getById = function(id, complete) {
    db.executeSqlFunction (function(connection){

        var params = [id];
        connection.query('SELECT * from bookmarks where id = ?', params, function(err, rows, fields) {
            if (err) throw err;
            complete(rows[0]);
        });

    });
}


exports.insert = function(name, link, complete) {
    db.executeSqlFunction (function(connection){

        var params = [name, link];
        connection.query('insert into bookmarks(name, link) values(?, ?)', params, function(err, results) {
            if (err) throw err;
            complete(results);
        });

    });
}

exports.delete = function(id, complete) {
    db.executeSqlFunction (function(connection){
        var params = [id];
        connection.query('delete from bookmarks where id =?', params, function(err, results) {
            if (err) throw err;
            complete(results);
        });

    });
}

exports.update = function(id, name, link, complete) {
    db.executeSqlFunction (function(connection){
        var params = [name, link, id];
        connection.query('update bookmarks set name = ?, link = ? where id = ?', params, function(err, results) {
            if (err) throw err;
            complete(results);
        });
    });
}