/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
 let numero;
 
  numero = parseInt(prompt("ingrese numero ente 0 y 9"));
  //opcion 1 | cuando num este fuera del rango o no sea num
  //while (numero >= 0 || numero <= 9 || isNaN(numero) )
   while (!(numero >=0 && numero <= 9)) { //opcion 2 
 // cuando num ni esre dentro del rango
	  numero = prompt("Error . ingresa de nuevo");
  }
  
  parseInt(document.getElementById("txtIdNumero").value= numero );

}//FIN DE LA FUNCIÓN
/*
let x;

x = IsNaN (); / NaN Not Number --> no es un numero

alert(x);


*/