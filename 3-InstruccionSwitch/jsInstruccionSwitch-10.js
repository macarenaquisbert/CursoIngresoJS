function mostrar()
{
	let Estacion;
	let tipoDestino;
	
	//Relevamiento de datos de entrada
	 Estacion = document.getElementById("txtIdEstacion").value;
	 tipoDestino = document.getElementById("txtIdDestino").value;
	
	 switch (Estacion) {
		case "Invierno":

				if (tipoDestino == "Bariloche") {
					 alert(" Se viaja ");
				}else //if ( tipoDestino == "Cataratas" || tipoDestino == "Mar del plata" || tipoDestino == "Cordoba" )
				 {
					alert("No se viaja por ahora ");
				} 
			break;

		case "Verano":

				if (tipoDestino == "Mar del plata " || tipoDestino == "Cataratas") {
					alert("Se viaja");
				} else {
					alert("No se viaja por ahora");
				}
			
			break;
		case "Otoño":

             if (tipoDestino == "Bariloche"|| tipoDestino == "Cataratas" || tipoDestino == "Mar del plata" || tipoDestino == "Cordoba") {
				 alert("Se viaja a todos los destinos");
			 }
             break;
		
		case "Primavera":

				if (tipoDestino == "Bariloche") {
		
					alert("No se viaja por ahora bariloche ingrese otro destino" );
				}else{
					alert ("Se viaja ");
				}

		break;
	}

}//FIN DE LA FUNCIÓN
/* Enunciado:
una agencia de viajes nos piden informar si hacemos 
viajes a lugares según la estación del año estemos,
informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas
 destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche 


	switch (Estacion) {
		case "Invierno":
			  
		    switch (tipoDestino){ 
				case "Bariloche":
					 
				    alert(" Se viaja ");

					 break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":

					alert("No se viaja por ahora ");
				
					break;
		    }
			break;

		case "Verano":
			
		    switch(tipoDestino){ 
                case "Mar del plata":
				case  "Cataratas":
				
					alert("Se viaja");
					
				break;
				case "Cordoba":
				case "Bariloche":
					
					alert("No se viaja por ahora");
					
				break;
			}
			break;
		case "Otoño":

		    switch(tipoDestino){ 

             case "Bariloche":
			 case "Cataratas": 
			 case "Mar del plata": 
			 case "Cordoba":
				
			    alert("Se viaja a todos los destinos");
			 
				 break; 

			} 
		case "Primavera":
			  
			   switch(tipoDestino){ 
			    case "Bariloche": 
					
				 alert("No se viaja por ahora bariloche ingrese otro destino" );
					
					break;
				case "Cataratas": 
				case "Mar del plata": 
				case "Cordoba":
					
				 alert ("Se viaja ");
					
					break;
				}
			
		break;
	}
















*/