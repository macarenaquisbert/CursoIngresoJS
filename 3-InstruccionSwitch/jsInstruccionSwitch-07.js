function mostrar()
{
	let destinoIngresado ;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	switch (destinoIngresado) {
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte")
			break;
		case "Mar del plata":
			alert("Este")
			break;
		case "Ushuaia":
			alert("Sur");
			break;
	}

}//FIN DE LA FUNCIÓN
/*Enunciado:
Al selecionar un destino , indicar
el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste */