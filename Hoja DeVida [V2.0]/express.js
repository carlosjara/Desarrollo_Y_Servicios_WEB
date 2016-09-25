var express = require('express');
var app = express();
var port = 9090;
app.use(express.static("dist"));

function openServer() {
  console.log("Escuchando Servidor en el puerto "+port+" ...");
}

app.listen(port,openServer);