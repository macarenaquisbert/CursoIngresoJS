/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/

function mostrar()
{
	let CLAVE ;
	//let flag =0;

	
	  CLAVE = prompt("ingrese la clave ");

 	  while (CLAVE != "utn750") { 
	  CLAVE = prompt("Clave invalida!!!. Reingrese clave;");
		}
	 CLAVE = confirm("ingreso correctamente");
}

//FIN DE LA FUNCIÓN
/*
 pido el dato
 valido el dato
   + valido
   + invalido ----->informo dato invalido y lo pido de nuevo
   + valido
   ya puedo usar el dato  
   ------------------------------------------------------------
   //do{
		//if(flag == 0){ 
	  CLAVE = prompt("ingrese la clave ");
		//flag =1;  }
	//} else { clave = prompt("Clave invalida!!. reingrese clave;")}
	while (CLAVE != "utn750"); { 
		
	    CLAVE = prompt("Clave invalida!!!. Reingrese clave;");
	}
	    CLAVE = confirm("ingreso correctamente");  
 
   */