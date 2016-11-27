var express = require('express');
var router = express.Router();
var db_bookmarks = require('../persistence/bookmarks')
var string_util = require("underscore.string");
var validator = require("../validators/bookmarks");


router.get('/', function (req, res) {
    db_bookmarks.getAll(function(rows, fields) {
        res.render('index', {links: rows});
    });
});

router.get('/edit/:id', function (req, res) {
    var id = req.params.id;
    db_bookmarks.getById(id, function(bookmark) {
        res.render('form', {bookmark: bookmark});
    });

});

router.get('/new', function (req, res) {
    res.render('form');
});

router.get('/delete/:id', function(req, res) {
    var id = req.params.id;

    db_bookmarks.delete(id, function(results) {
        res.redirect('/bookmarks');
    });
});

// Handle new bookmark form request
router.post('/', function(req, res) {

    var val_result = validator.validateBookmark(req.body.name, req.body.link);
    if (val_result.hasErrors) {
        res.render('form', {bookmark: {id :req.body.id, name: req.body.name, link: req.body.link}, errors: val_result});
    }

    else if (string_util.isBlank(req.body.id)) {
        db_bookmarks.insert(req.body.name, req.body.link, function(results) {
            res.redirect('/bookmarks');
        });
    }

    else {
        db_bookmarks.update(req.body.id, req.body.name, req.body.link, function(results) {
            res.redirect('/bookmarks');
        });
    }

});

module.exports = router;
