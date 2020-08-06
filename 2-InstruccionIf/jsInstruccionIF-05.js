function mostrar()
{
	//tomo la edad  
let edad;
edad = parseInt(document.getElementById("txtIdEdad").value);

// PREGUNTO SI NO ES ADOLECENTE 
// preguntamos si el valor de edad esta
//  fuera del rango adolescente
if (!(edad > 13 && edad <17)) { //-------- V
	
// if(edad > 13 || edad <17)--- tambien se puede ser asi 
	alert("No es adolescente"); //-----ENTRA XQ ES F
}

}//FIN DE LA FUNCIÓN
/*
Al ingresar una edad solo debemos
 informar si la persona NO es adolescente.

*/