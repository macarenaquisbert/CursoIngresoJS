/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
let nombre;
let edad;
//obtengo el nombre y edad de las cajas de texto a traves de
// su id y los guardo en las variable correspondientes 
nombre = document.getElementById("txtIdNombre").value; 
edad = document.getElementById("txtIdEdad").value;

alert ("Usted se llama " + nombre + " y su edad es" + edad );

 alert(" usted se llama ${nombre} y tiene ${edad} años"  );
}

/*
costantes y variables / literales de comillas 
operador + quiero armar un trencito de palabras 
cadena de caracteres es pegar un texto a la do de otro 
*/