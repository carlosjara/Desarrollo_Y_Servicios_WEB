/*console.log(hola);*
/**var hola = 100;*/
/*
sayhello("Juan");

function sayHello(name) {
	console.log("Hello" + name);
}
var number = "99";

console.log(5*number);
console.log(typeof number);

var number = "zero";
console.log(5 * number);

var i = Number.MAX_VALUE;
var ii = Number.MIN_VALUE;
console.log(typeof i);
console.log(i);
console.log(ii);
console.log(i+ii);

console.log("Hola - \" Mundo \"");*/

var readFiles = require('template_app/index.js')
 
var files = ["test1.txt","test2.txt"]
 
readFiles(files,function(e,contents) {
  if(e) return console.log(e.stack)
  console.log(contents)
})