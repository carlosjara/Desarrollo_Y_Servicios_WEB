var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	var messages = "";
	fs.readFile ("data/datos.json",(err,data) => {
						if (err) {
							throw err;
						}
						messages = JSON.parse(data);

						//var model = JSON.parse(data.toString());
						res.render('home', messages);
						});
 
});

module.exports = router;
