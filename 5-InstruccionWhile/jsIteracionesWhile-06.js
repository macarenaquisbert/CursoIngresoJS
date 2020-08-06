function mostrar()
/*Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio */
{

let i = 1;
let numero;
let suma =0;
let promedio;

while (i <= 5) {
	
	numero = parseInt(prompt("Ingrese 5 numeros"));
	suma += numero;
	i++;
}
  promedio = suma / 5;
document.getElementById("txtIdSuma").value = suma;
document.getElementById("txtIdPromedio").value = promedio;
// tambien se puede hacer asi -----> calcula en el aire para ahorrar variables
//document.getElementById("txtIdPromedio").value = suma /5;
}//FIN DE LA FUNCIÓN

/*let numero;
let numero2;
let numero3;
let numero4;
let numero5;
let suma;
let acumulada=0;
let promedio = 0;

numero=parseInt(prompt("ingrese un numero"));
numero2= parseInt(prompt("ingrese el numero"));
numero3=parseInt(prompt("ingrese el numero"));
numero4=parseInt(prompt("ingrese el numero"));
numero5= parseInt(prompt("ingrese le numero"));

suma = numero + numero2 + numero3 + numero4 + numero5;
promedio = suma /5;

document.getElementById("txtIdSuma.value")= suma;
document.getElementById("txtIdPromedio").value=promedio; */