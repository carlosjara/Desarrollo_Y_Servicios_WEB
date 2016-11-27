var getJsconnection = require('./getConnection');
var mysql      = require('mysql');
var exports = module.exports = {};

exports.getAll = function(func){
    getJsconnection.getConnection(function(connection) {
        connection.query('SELECT * FROM bookmarks', function(err,rows,fields){
                if (err) throw err;
                func(rows,fields);
            });
    });
};

exports.getById = function(id, func){
    getJsconnection.getConnection(function(connection) {
        connection.query('SELECT * FROM bookmarks where id = ? ;', [id], function(err,row,fields){
                if (err) throw err;
                func(row[0]);
            });
    });
};

exports.delete = function(id, func){
    getJsconnection.getConnection(function(connection) {
        connection.query('DELETE FROM bookmarks WHERE id= ?;', [id], function(err,rows,fields){
                if (err) throw err;
                func(rows);
            });
    });
};

exports.insert = function(name, link, func){
    getJsconnection.getConnection(function(connection) {
        connection.query('insert into bookmarks (name, link) values(?,?) ;', [name,link], function(err,rows,fields){
                if (err) throw err;
                func(rows);
            });
    });
};

exports.update = function(id, name, link, func){
    getJsconnection.getConnection(function(connection) {
        connection.query('update bookmarks set name=?, link= ? where id = ?;', [name,link,id], function(err,rows,fields){
                if (err) throw err;
                func(rows);
            });
    });
};
