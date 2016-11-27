var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

// Express configuration
var app = express();

// Body parser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(allowCrossDomain);



// Routes
app.use('/rest/bookmarks', require('./server/routes/bookmarks'));

app.listen(3000);