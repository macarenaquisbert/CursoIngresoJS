function mostrar()
{
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	
	switch (mes) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;
		case "Septiembre":
			alert("Ya pasamos el frio");
			break;
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		alert("ahora calor");
			break;

		default:
			break;
	}

/*Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, 
ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */


}//FIN DE LA FUNCIÓN