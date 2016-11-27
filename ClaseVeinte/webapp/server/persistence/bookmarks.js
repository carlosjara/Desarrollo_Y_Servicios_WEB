//var db = require('./connection');
var mongo = require('mongodb');
var db = require('./connectionMongo');
var exports = module.exports = {};

exports.getAll = function(complete) {
    db.executeNoSqlStatement (function(db){
        db.collection('bookmarks').find({}).toArray(function(err,docs){
            complete(docs);
        });
    });
}
exports.getById = function(id_in, complete) {
    var _id_in = new mongo.ObjectID(id_in);
    db.executeNoSqlStatement (function(db){
        db.collection('bookmarks').find({_id:_id_in}).toArray(function(err,docs){
          if (err) throw err;
              complete(docs[0]);
        });
    });
}

exports.insert = function(name_in, link_in, complete) {
    db.executeNoSqlStatement (function(db){
        db.collection('bookmarks').insert({name:name_in,link:link_in},function(err,docs){
            if (err) throw err;
              complete(docs);
        });
    });
}

exports.delete = function(id_in, complete) {
    var _id_in = new mongo.ObjectID(id_in);
    db.executeNoSqlStatement (function(db){
        db.collection('bookmarks').deleteOne({_id:_id_in},function(err, results) {
            if (err) throw err;
                complete(results);
        });
    });
}

exports.update = function(id_in, name_in, link_in, complete) {
    var _id_in = new mongo.ObjectID(id_in);
    db.executeNoSqlStatement (function(db){
        db.collection('bookmarks').updateOne({_id:_id_in},{$set: {name: name_in,link:link_in}} ,function(err, results) {
            if (err) throw err;
                complete(results);
        });
    });
}

/*
exports.getById = function(id, complete) {

    var params = [id];
    db.executeSqlStatement (function(connection){
        connection.query('SELECT * from bookmarks where id = ?', params, function(err, rows, fields) {
            if (err) throw err;
            complete(rows[0]);
        });
    });
}
exports.insert = function(name, link, complete) {
    var params = [name, link];
    db.executeSqlStatement (function(connection){
        connection.query('insert into bookmarks(name, link) values(?, ?)', params, function(err, results) {
            if (err) throw err;
            complete(results);
        });
    });
}

exports.delete = function(id, complete) {
    var params = [id];
    db.executeSqlStatement (function(connection){
        connection.query('delete from bookmarks where id =?', params, function(err, results) {
            if (err) throw err;
            complete(results);
        });
    });
}

exports.update = function(id, name, link, complete) {
    var params = [name, link, id];
    db.executeSqlStatement (function(connection){
        connection.query('update bookmarks set name = ?, link = ? where id = ?', params, function(err, results) {
            if (err) throw err;
            complete(results);
        });
    });
}
*/
