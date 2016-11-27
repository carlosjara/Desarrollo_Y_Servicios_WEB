//my sql configuration
var mysql = require('mysql');
var exports = module.exports = {};

var pool  = mysql.createPool({
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'my_db'
});

exports.executeSqlStatement = function(callback){
    pool.getConnection(function(err, connection){
    	callback(connection);
    	setTimeout(function() {
    	if (err) throw err;
    	connection.release();
    	},3000);
    });
}

