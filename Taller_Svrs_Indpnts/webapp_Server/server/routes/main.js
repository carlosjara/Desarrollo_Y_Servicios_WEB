var express = require('express');
var router = express.Router();
var db_bookmarks = require('../persistence/bookmarks')

router.get('/', function (req, res) {
    res.redirect('/bookmarks');
});

module.exports = router;