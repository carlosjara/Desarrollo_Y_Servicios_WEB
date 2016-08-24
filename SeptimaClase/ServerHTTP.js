// Este es un servicio REST de una calculadora
//http://localhost:8080/?op1=1&op2=123

var http = require ("http");
var url = require("url");

const PORT = 8080;

var estudiante ={};
estudiante.nombre = "Carlos";
estudiante.apellido = "Jaramillo";
estudiante.codigo = 0075872;
estudiante.edad = 21;

function handleRequest (request, response){	
	var url_parts = url.parse(request.url, true).query;
	var op1 = url_parts.op1;
	var op2 = url_parts.op2;
	
	response.setHeader('content-type', 'application/json');	
	//response.end (JSON.stringify(estudiante));
	response.end (JSON.stringify(Number(op1)+Number(op2)));
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});
