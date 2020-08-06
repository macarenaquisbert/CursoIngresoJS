function mostrar()
{
	let destinoIngresado ;
	destinoIngresado = document.getElementById("txtIdDestino").value;
	
	/*switch (destinoIngresado) {
		case "Bariloche":
		case  "Ushuaia":
			alert(" hace Frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("hace Calor")
			break;
	}
	/*default:
	alert("hacer frio")
	<!-- esto funciona como comentario en HTML -->
	
	*/
//----------- se puede hacer en if el ejercicio---------------
      if (destinoIngresado == "Bariloche" || destinoIngresado == "Ushuaia") {
		  alert("hace frio")
	  } else if(destinoIngresado == "Cataratas" || destinoIngresado == "Mar del plata"){
		  alert("hace calor"); 
	  }else{
		  alert("Destino invalido");
	  }

}//FIN DE LA FUNCIÓN
/*Enunciado:
Al seleccionar un destino informar 
si hace FRIO o CALOR en ese destino */