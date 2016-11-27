//my sql configuration
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
var url = 'mongodb://localhost:27017/bookmarks';

exports.executeNoSqlStatement = function(callback){
	MongoClient.connect(url, function(err, db) {
  		assert.equal(null, err);
  	  	callback(db);
	  	db.close();
	});
}

