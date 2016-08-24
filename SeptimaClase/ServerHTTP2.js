// Este es un servicio REST
//revisar asi http://localhost:8080
var http = require ("http");

const PORT = 8080;

var estudiante ={};
estudiante.nombre = "Carlos";
estudiante.apellido = "Jaramillo";
estudiante.codigo = 0075872;
estudiante.edad = 21;

function handleRequest (request, response){	
	response.setHeader('content-type', 'application/json');	
	response.end (JSON.stringify(estudiante));
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});