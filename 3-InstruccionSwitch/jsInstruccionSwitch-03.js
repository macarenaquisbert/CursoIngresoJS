function mostrar()
{
	//tomo el mes
	var mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert(" Este mes no tiene más de 29 días.")
			break;
	/*	case "Enero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		alert("Este mes tiene 30 o más días");
			break;
	*/
		default:// si no ingreso ninguno de los anteriores 
		// entro a default..
		alert("Este mes tiene 30 o más días");
			break;
	}
	
	
	alert();
	
	


}//FIN DE LA FUNCIÓN
/*
al seleccionar un mes informar.
si es Febrero: 
si NO es Febrero: "Este mes tiene 30 o más días"

*/