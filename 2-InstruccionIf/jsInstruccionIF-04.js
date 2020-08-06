function mostrar()
{
	//tomo la edad  
	let edad;

	edad =parseInt(document.getElementById("txtIdEdad").value);
	// pregunto si estoy adentro del rango 
	if (edad >=13 && edad <=17) {
		 
		alert("Es adolescente")
	 }
	// preguntar si esto fuera del rango y niego
	// afuera del rango
	if (!(edad < 13 || edad >17 )) {
		alert("Es adolescente");
	}
	
	
	/* if (edad >= 13 ) {
		
		if (edad <= 17) {            funciona 
		alert("Es adolescente")
		}
	} */



}//FIN DE LA FUNCIÓN
/*
V if
F else 

cuando las cosas tiene apertura y cierre no lleva ; punto coma
les termina el if muere en el ;
centencias solo ;



*/