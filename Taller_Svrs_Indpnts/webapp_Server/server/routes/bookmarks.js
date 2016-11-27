var express = require('express');
var router = express.Router();
var db_bookmarks = require('../persistence/bookmarks');
var validator = require("../validators/bookmarks");

/**router.get('/', function(req, res) {  
   res.send("Hello World!");
});
*/router.get('/', function (req, res) {
    db_bookmarks.getAll(function(rows, fields) {
        res.render('index', {});
    });
});

module.exports = router;
