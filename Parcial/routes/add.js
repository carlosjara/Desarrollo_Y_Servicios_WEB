var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */

router.post('/', function(req, res) {
	fs.readFile ("data/datos.json",(err,data) => {
						if (err) {
							throw err;
						}
						var messages = JSON.parse(data.toString());
						var nuevo = {nombre:req.body.name,link:req.body.direc};
						messages.enlaces.push(nuevo);
						fs.writeFile('data/datos.json',JSON.stringify(messages),function(err){
							res.render('home', messages);
						});
						});
 
});

module.exports = router;
