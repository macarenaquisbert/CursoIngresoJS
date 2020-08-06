function mostrar()
{
	let  edad;
	let estado;

	edad= parseInt(document.getElementById("txtEdad").value);
	estado= document.getElementById("estadoCivil").value;


	if (edad <= 18 && estado != "Soltero") 
	{
		alert("es muy pequeño para No ser soltero")
	}


}//FIN DE LA FUNCIÓN
/*let bandera=0;
	let bandera2 =0;
	let cont = 0 ;
	let repeticion = 0 ; 
	let cont2 = 0;
	let n;
	
	
		n = parseInt(prompt("ingrese el nº 999"));	

	if (n <= 999 || bandera == 0) {

		alert(" Correcto ; (entro a la bandera) ");
		bandera = 1;
		cont++;
	} else {
		   if ( n >= 999 || bandera2 == 0){ 
	     	alert ( " el numero es diferente al 999 (pasa la bandera 2)");
			bandera2 = 1; 
			cont2 ++; 
		   }
	}
    
	if (bandera == 1) {
		document.write( "se ingreso el numero ..." + n + " el numero de veces que ingreso el numero " +cont +"</br>");
	}
	
		if (bandera2 == 1 ) {
			
			document.write(" no se ingreso el numero correcto" + n + "numero de veces ingresada " + cont2 + "</br>");
		}
 */