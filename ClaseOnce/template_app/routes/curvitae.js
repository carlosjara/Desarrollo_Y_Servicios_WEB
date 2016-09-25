var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	var messages = "";
	fs.readFile ("../datos.json",(err,data) => {
						if (err) throw err;
						messages = JSON.parse(data);
						var model = {message: "No se pudo verificar Contenido"};
						model.messages=messages;
						if (req.body.contrasena == "jaramillo"){
							model.message = "Bienvenido";
						}
						res.render('welcome', model);
						});
});

module.exports = router;
