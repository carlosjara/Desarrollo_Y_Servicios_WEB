var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
	var messages = [{texto: "Elemento1", content: "Hola"},{texto: "Elemento2", content: "Hola2"}];

	var model = {message: "No se pudo verificar Contenido"};
	model.messages=messages;
	if (req.body.usuario == req.body.contrasena){
		model.message = "Bienvenido";
		console.log(req.body);
	}
	res.render('welcome', model);
});

module.exports = router;

