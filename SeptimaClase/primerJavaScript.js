console.log ("Hola Mundo --");

var myVar = "Hola";
console.log ("myVar = Hola --- ",typeof(myVar));

var anotherVar;
console.log("anotherVar --",typeof(anotherVar));
var anotherVar = null;
console.log("anotherVar = null --",typeof(anotherVar));


var number = 10;
console.log("var numer = 10 -- ",typeof(number));
var number = 15.22;
console.log("var number = 15.22 -- ",typeof(number));

//--------------------------------------------------------
function myFunction (a, b) {
	return a + b;
}

console.log("-------------------------------------");

var print = function(message){
	console.log(message);
}

print();
print("Hola!");
print("Hola!","Hola"); // se ignora el segundo parametro


