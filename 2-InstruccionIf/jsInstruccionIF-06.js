function mostrar()
{
	//tomo la edad  
	let edad;
    edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if(edad <= 13){ 
	alert("Es niño");
	}
	else{
		
		if (edad >= 13 && edad <=17) {
			alert("Es adolecente");
		} 
		 else {
			 if (edad > 18) {
				alert("adulto");
			 }
			    else{ //if (edad > 65)
			     alert("anciano"); 
			    }
		}
	}


}//FIN DE LA FUNCIÓN