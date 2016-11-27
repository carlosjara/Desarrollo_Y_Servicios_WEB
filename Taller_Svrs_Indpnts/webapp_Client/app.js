var express = require('express');
var bodyParser = require('body-parser');

// Express configuration
var app = express();
app.use(express.static('public'));

// Body parser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(3001,function(){
	console.log("Client server listening on ... \nPort:3001");
});