var express = require('express');
var router = express.Router();
var db_bookmarks = require('../persistence/bookmarks')
var string_util = require("underscore.string");
var validator = require("../validators/bookmarks");


router.get('/bookmarks', function (req, res) {
    db_bookmarks.getAll(function(rows, fields) {
        res.json(rows);
    });
});

router.post('/bookmarks', function (req, res) {
  var name = req.body.name;
  var link = req.body.link;
    db_bookmarks.insert(name, link, function(rows, fields) {
        res.json(rows);
    });
});

router.put('/bookmarks', function (req, res) {
    var id = req.body._id;
    var name = req.body.name;
    var link = req.body.link;
    console.log(id,name,link);
    db_bookmarks.update(id, name, link, function(rows, fields) {
        res.json(rows);
    });
});

module.exports = router;
