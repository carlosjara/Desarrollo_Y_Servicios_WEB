var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var messages = "";
	fs.readFile ("../datoshob.json",(err,data) => {
						console.log("HOLA");
						if (err) throw err;
						messages = JSON.parse(data);

						var model = {message: "Hobbies"};
						model.messages=messages;
						res.render('hobbies', model);
						});
});

module.exports = router;
