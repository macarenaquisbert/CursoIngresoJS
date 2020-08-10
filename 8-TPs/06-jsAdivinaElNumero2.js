/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
 numeroSecreto = Math.round(Math.random()* 99 + 1 );
 alert("listo ya pense un numero... Trata de adivinarlo");
 document.getElementById("txtIdIntentos").value = contadorIntentos;
 document.getElementById("txtIdNumeros").focus(); 
 flag = 1; 
 contadorIntentos = 0;

}

function verificar()
{
	
	let num;

	if (flag == 0 ){ 
	  alert("debes precionar primero el boton comenzar");
	} else {
	  
	  num = parseInt(document.getElementById("txtIdNumero").value);
	  contadorIntentos ++;
	  document.getElementById("txtIdIntentos").value = contadorIntentos;
  
	  if (num == numeroSecreto )
	  { 
		// aca va el codigo usuario ganador
        switch (contadorIntentos) {
			case 1:
				alert("1° intento: “usted es un Psíquico”.");
				break;
			case 2: 
			     alert("2° intento: “excelente percepción”.");
			break;
			case 3:
				alert("3° intento: “Esto es suerte”.");
				break;
			case 4:
				alert("4° intento: “Excelente técnica”.");
				break;
			case 5:
				alert("5° intento: “usted está en la media”.");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Desde  6 Intentos hasta 10:”falta técnica”");
				break;
		
			default:
				alert("Más de 10 intentos: “afortunado en el amor!!”");	
		
		}
		
		alert(`Precio "Comensar" paravolvera empezar`);
		
		 flag = 0;
	  }
	  else if (num > numeroSecreto) {
		//aca va el codigo donde informa que el usuario se paso
		alert("Se paso....");
	  } else{
		// aca va el codigo donde informo que le falta
		alert("le falta");
	  }
	  
	  document.getElementById("txtIdNumero").value = "";
	  document.getElementById("txtIdNumeros").focus();
	  }
   

}