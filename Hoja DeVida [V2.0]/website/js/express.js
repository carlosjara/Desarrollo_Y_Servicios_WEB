var express = require('express');
var app = express();
var port = 8080;
app.use(express.static("../../website"));

function openServer() {
  console.log("Escuchando Servidor en el puerto "+port+" ...");
}

app.listen(openServer)