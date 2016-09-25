var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var messages = "";
	fs.readFile ("../datospro.json",(err,data) => {
						if (err) throw err;
						messages = JSON.parse(data);
						var model = {message: "Proyectos"};
						model.messages=messages;
						res.render('proyectos', model);
						});
});

module.exports = router;
