var express = require('express');
var fs = require('fs');
var url = require("url");
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
	var url_parts = url.parse(req.url, true).query;
	fs.readFile ("data/datos.json",(err,data) => {
						if (err) {
							throw err;
						}
						var messages = JSON.parse(data.toString());
						messages = eliminar(messages,url_parts.nombre);
						fs.writeFile('data/datos.json',JSON.stringify(messages),function(err){
							res.render('home', messages);
						});
						});
 
});

function eliminar(modelo,nombre) {
	for (var i = 0; i< Object.keys(modelo.enlaces).length; i++) {
			if (nombre==modelo.enlaces[i].nombre) {
				modelo.enlaces.splice(i,1);
			}
	}
	return modelo;
}

module.exports = router;
