var exports = module.exports = {};
var mysql      = require('mysql');

exports.getConnection = function(func) {
	    var connection = mysql.createConnection({
        host : 'localhost',
        user : 'bookmarks',
        password : 'bookmarks',
        database : 'bookmarks'
        });

	    connection.connect();
	    func(connection);

		connection.end();	    
}