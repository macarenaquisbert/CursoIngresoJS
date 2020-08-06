/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	nombre = prompt("ingrese su nombre");
	document.getElementById("txtIdNombre").value = nombre; 
}
/*
destino era la variable 
origen la variable nombre 
destino getelemet by id("txtIdNombre").value ---caja de texto = nombre dando valor a la caja de texto 

pedir dato -> prompt --> id

mostrar info-- > alert --> id 

variable 

*/
