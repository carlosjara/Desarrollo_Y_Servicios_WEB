// Este es un servicio REST de una calculadora

var http = require ("http");
var url = require("url");
const PORT = 8080;
function handleRequest (request, response){	
	var pathname = url.parse(request.url, true).pathname;
	var url_parts = url.parse(request.url, true).query;
	var method = request.method;
	var op1 = url_parts.op1;
	var op2 = url_parts.op2;
	if (method=="GET"){
		response.end ("<html><head><title>Form Page</title></head><body><form action = '' method ='POST'><br> UserName <br><input type='text' name='username'><br> PassWord <br><input type='password' name='password'><br><br><input type='submit' name'submit'></form>by. Carlos Jaramillo</body></html>");
	}
	if (method=="POST"){
		console.log("POST METHOD");
		request.on('data', function (body){
			console.log(body.username);
			if(body.username == "claseweb"){
				console.log("ES EL USUARIO");	
				if (body.password == "web123"){
					response.end ("<html><head><title>Form Page</title></head><body>BIENVENIDO</body></html>");
				}
			}
		});
	}

}
var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});
