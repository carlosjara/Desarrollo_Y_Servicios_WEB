var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Routes requires
var main = require('./server/routes/main');
var bookmarks = require('./server/routes/bookmarks');
var rest = require('./server/routes/rest_bookmarks');

// Express configuration
var app = express();

// Body parser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Permissions
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE');
  next();
});

// Routes
app.use('/', main);
app.use('/bookmarks', bookmarks);
app.use('/rest', rest);

app.listen(3000, function(){
	console.log("Server Listening on port:...\n3000");
});
