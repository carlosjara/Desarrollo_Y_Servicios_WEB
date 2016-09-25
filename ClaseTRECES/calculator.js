function sumar(a,b) {
	var elemt1 = document.getElementById('numb1');
	var elemt2 = document.getElementById('numb2');
	var res = (Number(elemt1.value) + Number(elemt2.value));
	document.getElementById('numb3').value = res;
}

function restar(a,b) {
	var elemt1 = document.getElementById('numb1');
	var elemt2 = document.getElementById('numb2');
	var res = (Number(elemt1.value) - Number(elemt2.value));
	document.getElementById('numb3').value = res;
}

function multiplicar(a,b) {
	var elemt1 = document.getElementById('numb1');
	var elemt2 = document.getElementById('numb2');
	var res = (Number(elemt1.value) * Number(elemt2.value));
	document.getElementById('numb3').value = res;
}

function dividir(a,b) {
	var elemt1 = document.getElementById('numb1');
	var elemt2 = document.getElementById('numb2');
	var res = (Number(elemt1.value) / Number(elemt2.value));
	document.getElementById('numb3').value = res;
}

function printDom(Node){
	var childrend = Node.childNodes;
	for (var i = 0 ; i < childrend.length; i++) {
		console.log(childrend[i].nodeName);
		printDom(childrend[i]);
	}
}

function changeValues() {
	var miDivs = document.getElementsByTagName('div');
	for (var i = 0; i < miDivs.length; i++) {
		miDivs[i].setAttribute("style","background-color:black");
	}
}
function changeValues2() {
	var miDivs = document.getElementsByTagName('div');
	for (var i = 0; i < miDivs.length; i++) {
		miDivs[i].setAttribute("style","background-color:none");
	}
}
$(document).ready(function(){
	
    $("button").click(function(){
        $("p").css({"background-color": "yellow", "font-size": "200%"});
    });
});
