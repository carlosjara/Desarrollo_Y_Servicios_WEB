//my sql configuration
var mysql = require('mysql');
var exports = module.exports = {};

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '123456',
  database        : 'bookmarks'
});

exports.executeSqlFunction = function(funct) {
    pool.getConnection(function(err, connection) {
        if (err) throw err;

        funct(connection);
        connection.release();
    });
}