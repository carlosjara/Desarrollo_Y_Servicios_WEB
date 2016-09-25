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
						messages = change(messages,req.body.Newname,req.body.Newdirec);
						fs.writeFile('data/datos.json',JSON.stringify(messages),function(err){
							res.render('home', messages);
						});
						});
 
});
function change(modelo,nombre,url) {
	for (var i = 0; i< Object.keys(modelo.enlaces).length; i++) {
			if (nombre==modelo.enlaces[i].nombre) {
				modelo.enlaces[i].link = url;
			}
	}
	return modelo;
}

module.exports = router;
