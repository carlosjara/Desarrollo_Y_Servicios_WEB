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
						var nombre = url_parts.nombre;
						var link = url_parts.url;
						fs.writeFile('data/datos.json',JSON.stringify(messages),function(err){
							messages.nombre = nombre;
							messages.link = link;
							res.render('edit', messages);
						});
						});
 
});

function eliminar(modelo,nombre) {
	console.log(Object.keys(modelo.enlaces).length);
	for (var i = 0; i< Object.keys(modelo.enlaces).length; i++) {
			if (nombre==modelo.enlaces[i].nombre) {
				modelo.enlaces.splice(i,1);
			}
	}
	return modelo;
}

module.exports = router;
