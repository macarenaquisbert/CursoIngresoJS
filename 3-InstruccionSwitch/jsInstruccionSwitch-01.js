function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	
	switch (mes) {
		case "Enero":
			alert("que comiences bien el año!!!.")
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Junio":
			alert("se vienen las vacaciones!!!.");
			break
		case "Diciembre ":
			alert("Felices fiesta!!!." );
			break;
	
	}
	
	

	
	/*
	switch (mes) {
		case 1:
			if (mes == "Enero"){ operaciones relacionales if 
			alert("que comiences bien el año!!!.");
			}
			break;
	    case 2:
             if (mes == "Marzo") {
				 alert("a clases!!!.");
			 }
			break;
		case 3:
			if (mes == "Junio") {
				alert("se vienen las vacaciones!!!.");
			}
		case 4: 
		 if (mes == "Diciembre") {
			 alert("Felices fiesta!!!." );
		 }
		default:
			break;
	}

*/

}//FIN DE LA FUNCIÓN
/* Enunciado:
al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/