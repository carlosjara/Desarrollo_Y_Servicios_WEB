// Este es un servicio REST de una calculadora
//http://localhost:8080/?op1=1&op2=123

var http = require ("http");
var url = require("url");

const PORT = 8080;


function handleRequest (request, response){	
	var pathname = url.parse(request.url, true).pathname;
	var url_parts = url.parse(request.url, true).query;
	var op1 = url_parts.op1;
	var op2 = url_parts.op2;
	var respuesta = {};
	respuesta.value = "text/html"; 
	respuesta.value =  request.headers.accept;
	var res = {};
	res.op1=op1;
	res.op2=op2;
	switch(pathname) {
    case "/suma":
    	res.operation = "+";
    	res.respuesta = (Number(op1)+Number(op2));
        break;
    case "/resta":
    	res.operation = "-";
        res.respuesta = (Number(op1)-Number(op2));
        break;
    case "/mult":
    	res.operation = "*";
        res.respuesta = (Number(op1)*Number(op2));
        break;
    case "/div":
    	res.operation = "/";
        res.respuesta = (Number(op1)/Number(op2));
        break;
    default:
    	res = ("Operacion No Valida");
	}

	if (respuesta.value=="application/json") {
			res = JSON.stringify(res);
			response.setHeader('content-type', 'application/json');	
		}
	else{
			res = ("<html><head><title>Form Page</title></head><body>"+res.respuesta+"</body></html>");
			response.setHeader('content-type', 'text/html');		
		}
	response.end (res);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});
