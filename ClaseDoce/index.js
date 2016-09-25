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
/*
var readFiles = require('template_app/index.js')
 
var files = ["test1.txt","test2.txt"]
 
readFiles(files,function(e,contents) {
  if(e) return console.log(e.stack)
  console.log(contents)
})*/
/*
function palindrome (cadena){
	var i = 0, j= cadena.length;
	while (i<=cadena.length/2){
		if (cadena[i]==cadena[j]) {
			return true;
		}
		else{
			return false;
		}
		i = i+1;
		j = j-1;

	}
}

console.log(palindrome("seres"));*/
/*
var data = new Array("2");
console.log(data.length);

var my_array = [1,2];
my_array.length = 1;
console.log(my_array[1]);*/
/*
var user = {fname :"john", lname:"Doe", age:25};
for (p in user){
	console.log(user[p]);
}*/
/*
function Msort(array) {
	if ((typeof array[0])==Number){
		return array.sort(function(a, b){return b-a})
	}
	else{
		return array.sort();
	}
}
var user1 = [4,3,5,3,67,5];
var user2 = ["banana","naranja","amarillo"];
console.log(Msort(user1));
console.log(Msort(user2));*/


/*
var obj = {prop1:"prop1",prop2:"prop2",prop3:"prop3",prop4:"prop4",prop5:"prop5"};

function Obj2Array(obj) {
	var Marray = new Array();

	for (p in obj){
		Marray.push(obj[p]);
	}
	console.log(Marray)
}
Obj2Array(obj);*/
/*
var my_var = 50;
console.log(my_var);
console.log(this.my_var); //esto solo funciona en la consola interactiva 
*/

/*var text = "a random";

function myfunc() {
	//var text = "a function";
	text = "a function";
}

myfunc();
console.log(text);
*/
/*
var text ="original";
function printText() {
	text = "more original";
	var nestedFunction = function(){
		console.log(text);
	}
	nestedFunction();
}
printText();*/



/*//sincrono
addAndAddOperation = function(a,b,operation) {
	var sum = a +b;
	return sum + operation(a,b);
}
multiply = function (a,b){
	return a*b;
}
//
addAndAddOperation = function(a,b,operation) {
	var sum = a +b;
	return sum + operation(a,b);
}
multiply = function (a,b){
	c = 2;
	return a*b;
}
var c = 5;
console.log(addAndAddOperation(2,3,multiply));
console.log(c);*/
/*
operacion = function(a,b, operation){
	var sum = a + b;
	return sum+operation(a,b);
}

operacion(2,3,function (a,b){
	return a * b;
});
*/
//asincronos
/*
function myCollect(array,operation) {
	for (var i = 0; i<array.length; i++){
		var res =operation(array[i],array[i+1]);
	}
};

function myMap(array,operation) {
	for (p in array){
		var res = operation(p);
		console.log(res);
	}
};

myCollect([2,3,4,5],function (a,b){
	return a * b;
});

myMap([1,2,3,4],function (a){
	return a + 2;
});
*/
/*
function asyncFunction(message){
	setTimeout(function(){
		console.log(message);		
	}, 500);
}

asyncFunction("Hola1");
asyncFunction("Hola2");
asyncFunction("Hola3");
asyncFunction("Hola4");
asyncFunction("Hola5");
*/

function asyncFunction(message,cb){
	setTimeout(function(){
		console.log(message);
		cb();
	},500);
}

var dbRecord;

function onQueryExecute(){
	dbRecord = {name:"new user", age:12};
	console.log("query execute");
	console.log(dbRecord.name);
};

asyncFunction("queryDataBase", onQueryExecute);
//console.log(dbRecord.name); aqui no funciona por que es necesario que primero se llame el asyncFunction



