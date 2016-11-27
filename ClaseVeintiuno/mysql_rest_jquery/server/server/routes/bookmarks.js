var express = require('express');
var router = express.Router();
var db_bookmarks = require('../persistence/bookmarks')
var string_util = require("underscore.string");
var validator = require("../validators/bookmarks");


router.get('/', function (req, res) {
    db_bookmarks.getAll(function(rows, fields) {
       res.jsonp(rows);
    });
});

router.get('/:id', function (req, res) {
    var id = req.params.id;

    db_bookmarks.getById(id, function(bookmark) {
        res.jsonp(bookmark);
    });
});

router.delete('/:id', function (req, res) {
    var id = req.params.id;

    db_bookmarks.delete(id, function(bookmark) {
        res.sendStatus(204);
    });
});

router.post('/', function (req, res) {
    db_bookmarks.insert(req.body.name, req.body.link, function(bookmark) {
         res.sendStatus(200);
    });
});


router.put('/', function (req, res) {
    db_bookmarks.update(req.body.id, req.body.name, req.body.link, function(bookmark) {
         res.sendStatus(204);
    });
});

module.exports = router;