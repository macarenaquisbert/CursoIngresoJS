/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let i = 0;
	let numero;
	let suma =0;
	let promedio;
	let seguir = 's'
	
	while (seguir == 's') {
		
		numero = parseInt(prompt("Deceas ingresar un numeros"));
		suma = suma + numero;
		i++;
		seguir = prompt("Quiere ingresar de nuevo un numero ?")
	}
/* tambien se puede hacer con do/ while= para ingresar por lo menos una ves 
	do {
		numero = parseInt(prompt("Deceas ingresar un numeros"));
		suma = suma + numero;
		i++;
		seguir = prompt("Quiere ingresar de nuevo un numero ?");

	}  while (seguir == 's');
	*/
	  promedio = suma / i;

	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;


	/*let seguir = 's'
	
	while (seguir == 's') {
		
		alert("Hola");

		seguir = prompt("Quiere que le salude de nuevo ?");

	}

       alert("Ok, No lo saludo mas entonces");*/

}//FIN DE LA FUNCIÓN