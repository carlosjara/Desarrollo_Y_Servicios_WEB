var http = require ("http");
var url = require("url");
var fs = require("fs");
var path = require("path");
const PORT = 8080;

function handleRequest (request, response){	
	var filePath = " ";
	var map = {};
	const types = {'.css':'text/css'};
	var header = "text/html"; 
	var ext = path.extname(request.url).toLowerCase();
	var method = request.method;
	var url_parts = url.parse(request.url, true).query;
	var pathname = url.parse(request.url, true).pathname;

	if (ext in types){
		header = "text/css";
		filePath = "."+request.url;	
	}
	else{
		switch (pathname){
		case "/":
			filePath = "template/index.html";
			break;
		case "/welcome":
			if (method=="GET") {
				map.usuario = url_parts.usuario;
				console.log("usuario: "+url_parts.usuario+" pass: "+url_parts.contrasena);
				if (url_parts.usuario==url_parts.contrasena) {				
					filePath = "template/welcome.html";}
			}
			break;
		default:
			filePath = "template/error.html";
			map.url = request.url;
		}
	
	}
	fs.readFile (filePath,(err,data) => {
		if (err) throw err;
		switch (header){
			case "text/css":
				response.setHeader('content-type', header);
				break;
			default:
				response.setHeader('content-type', header);				
		}
		response.end(mergeTemplate(data.toString(),map));
	});
	
}

function mergeTemplate (template, object){
	for (property in object){
		var template = template.replace("${"+property+"}",object[property]);
	}
	return template
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s", PORT);
});