/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
  //declarar las variables
   let numero;
   let contNeg = 0;
   let seguir; 
   let acumPositivos=0;
   let acumNeg=0;
 //genero un bucle del tipo mientras el usuario quiera(do while)
 //---- dentro del buble----
 do {
	  numero = parseInt(prompt("Ingrese un numero; "));

	  if(numero >= 0){
		alert("positivo")// el alert es es para verificar 
		acumPositivos += numero;

	  }else if (numero <= 1) {
		alert("negativo"); 
		contNeg++;
		acumNeg *= numero;
	  }
	 seguir = prompt("Quiere ingresar un numero"); 
 }while (seguir == 's') {
	 
	if (contNeg == 0) {
		//negtivo =0;
		//si entro es porq el usuario no ingreso ningun numero negat
		// entonces cambio el 1 por un 0 para mostrar el resultado nuegado
		document.getElementById("txtIdProducto").value = 0;
	} else {
		document.getElementById("txtIdProducto").value = acumNeg;
	}
 document.getElementById("txtIdSuma").value = acumPositivos;
 //document.getElementById("txtIdProducto").value = acumNeg;


 }
 //pido un numero
 //analizar el signo(+ / -)
//acumulo el signo correcto



 //----- despues del bucle ----
 // mostramos los resultados 
}//FIN DE LA FUNCIÓN