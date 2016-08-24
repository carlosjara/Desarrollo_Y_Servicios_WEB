var http = require ("http");

const PORT = 8080;

function handleRequest (request, response){
	response.end ("<html><head><title>SERVIDOR rta</title></head><body>Esta es la primera pagina que se crea y se envia por el servidor<dl><dl>Primer Error</dl><dd>Metiste todo a la fuerza</dd><dl>Segundo Error</dl><dd>Tendras que escribir en una sola linea</dd></dl>by. Carlos Jaramillo</body></html>");
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});