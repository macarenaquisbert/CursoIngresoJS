/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1;
	let numero2;
	let resultado;

	//30
	numero1 = document.getElementById("txtIdNumeroUno").value;
	
	numero1 = parseInt(numero1);
	
	numero2 = document.getElementById("txtIdNumeroDos").value;
	
	numero2 = parseInt(numero2);

	resultado = numero1 + numero2;

	alert("la suma es " + resultado );
}
/*
codigo ascii completo, tabla 
string + string = concatena
string + number  = concatena 
number + string = concatena 
number + n

let x = "123333juan644";
x = parseInt (x);
alert(X)       


*/
