var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	var messages = "definiciins_";
	fs.readFile ("../datos.json",(err,data) => {
						if (err) throw err;
						messages = data.toString();
						var model = {message: "No se pudo verificar Contenido"};
						model.messages=messages;
						if (req.body.usuario == req.body.contrasena){
							model.message = "Bienvenido";
						}
						res.render('welcome', model);
						});
});

module.exports = router;
