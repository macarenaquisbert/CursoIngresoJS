/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	
 let nombre ;

 nombre = prompt("ingrese el nombre "); // origen 

 alert(nombre);
  

}
/*
prompt: muestra una ventana emergente que muestra
dos botones que indica aceptar | cancelar 
var / let es lo mismo 

alert:armar la ventana emergente y posisionarse 
en frente de la pantalla montrando el dato atraves
de la pantalla y no debuelve nada 

" " caracter vario
"" caracter en blanco 

let nombre -----> declaracion de variable nombre
nombre= "juan"---> inicializar la variable nombre 
--------------------------------------------------------
alert(nombre);
nombre = "pablo"; ---> lo piso la primera nombre 
 Alert(nombre) no va ejecutar porque esta en mayuscula 
	- conpilador traduce en codigo en numeros si hay un error
	- en sintagsis no lo compila  
	alert(nombre); es una cadena de caraceles 
	aparece undefainer en la pantalla xq no le dio un valor
	inicializada es darle un valor
*/
