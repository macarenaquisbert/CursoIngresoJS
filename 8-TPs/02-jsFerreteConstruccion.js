/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar 
si se ingresara el largo y el ancho de un terreno
rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

 let largo;
 let ancho;
 let perimetro;
 let alambra;
 
 largo = parseInt(document.getElementById("txtIdLargo").value);
 ancho = parseInt(document.getElementById("txtIdAncho").value);
 
 perimetro = 2 * largo + 2 * ancho;
 // perimetro = 2 * ( largo + ancho);
 alambra = perimetro * 3;

 alert("Es necesario " + alambra +" metros de alambre");
}
function Circulo () 
{
/*B.mostrar la cantidad de alambre a comprar  si se ingresara 
el radio  de un terreno circular y se debe alambra con tres hilos de alambre. */	
 let largo;
 let radio;
 let perimetro;
 let alambre;
 //const pi = 3.14; (1) son valores de uan costante 

 radio = parseInt(document.getElementById("txtIdRadio").value);
 
 perimetro = 2 * radio * Math.PI; 
 //perimetro = 2 * radio * PI (1)
  alambre = perimetro * 3
 //alert(Math.PI) 3,144..MUESTRA EL RESULTADO PI
 alert("Es necesario dar " + alambre);


}
function Materiales () 
{
/*C.Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas
de cemento y 3 de cal, debemos mostrar cuantas bolsas se
 necesitan de cada uno para las medidas que nos ingresen. */

let cemento;
let area;
let cal;
let largo;
let ancho; 

largo = parseInt(document.getElementById("txtIdLargo").value);
ancho = parseInt(document.getElementById("txtIdAncho").value);

area = largo * ancho;
cemento =2 * area;
cal = 3 * area;

alert(`Parahacer contrapiso de ${area} m2 se necesitan ${cemento} bolsas de cemento y ${cal}`)

}