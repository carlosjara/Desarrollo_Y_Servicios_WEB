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

module.exports = router;
