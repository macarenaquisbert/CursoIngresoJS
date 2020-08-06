function mostrar()
{
	//tomo el mes
	var mes = document.getElementById("txtIdMes").value;

	switch (mes) {
		case "Febrero":
			alert(" Este mes tiene más de 29 /28 días.")
			break;
		case "Abril":
		case "Noviembre":
		case "Junio":
		case "Septiembre":
			alert("30 dias");
			break;
		default:
		alert("31 dias");
		break;
	}
	/*Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */



}//FIN DE LA FUNCIÓN