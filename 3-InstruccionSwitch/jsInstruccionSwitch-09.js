function mostrar()/*Enunciado:
una agencia de viajes debe sacar las tarifas de los 
viajes , se cobra $15.000 por cada estadia como base,
se pide el ingreso de una estacion del año y localidad 
para vacacionar para poder calcular el precio final

-en Invierno: bariloche tiene un aumento
del 20% cataratas y Cordoba tiene un descuento
del 10% Mar del plata tiene un descuento del 20%

-en Verano: bariloche tiene un descuento del 20% 
cataratas y Cordoba tiene un aumento del 10% 
Mar del plata tiene un aumento del 20%

-en Otoño y Primavera: bariloche tiene un aumento 
del 10% cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y Cordoba 
tiene el precio sin descuento  */
{
	const precio = 15000;
	let aumento = 0 ;
	let importeFinal;
	let descuento = 0;
	let tipoDestino;
	let Estacion;

    Estacion = document.getElementById("txtIdEstacion").value;
    tipoDestino = document.getElementById("txtIdDestino").value; 
	
    switch (Estacion) {
		
		case "Invierno":

			switch (tipoDestino) {
				
				case "Bariloche":
					
					 aumento = 20;
				 
					break;
				case "Cataratas":
				case "Cordoba":
					 
					 descuento = 10;
					 
				    break;
				case "Mar del plata":
				    descuento = 20;
					
					break;
			}
			break;

		case "Verano":

		    switch (tipoDestino) {
				case "Bariloche":
					
					 descuento = 20;
				 
					break;
				case "Cataratas":
				case "Cordoba":
					 
					 aumento = 10;
					 
				    break;
			
				case "Mar del plata":
					aumento = 20;
					break;
			}
			break;

		case "Otoño":
		case "Primavera":

            switch (tipoDestino) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					 
					 aumento = 10;
					 
				    break;
			}
			break;

	}//FIN DEL SWITCH----------
	//ingresa el descuento o aumento 

	if (aumento != 0) {
		
		importeFinal = precio + precio * aumento / 100;

	} else if(descuento != 0) {
	
		importeFinal = precio - precio * descuento / 100;
	
	}else{
	
		importeFinal = precio;
	
	}
    alert("el precio final " +  importeFinal);










}//FIN DE LA FUNCIÓN
/*
FUNCIONA PERO NO ES LO CORRECTO PARA QUE FUNCIONE EL SWITCH----------------------------
	switch (Estacion) {

		case "Invierno":
              
			 if (Estacion == "Invierno" ){ 
	
			    //alert("Seleciono " + Estacion + " como estacion del año con destino " + tipoDestino);
                 
				 if (tipoDestino == "Bariloche"){ 
					
					aumento = (importe * 20) /100;
                    importeFinal = importe + aumento;
                alert("El costo del destino tiene un aumento del 20% " + aumento + " y el total a pagar" + importeFinal);
				}
				 else if (tipoDestino == "Cataratas" || tipoDestino == "Cordoba"){
					
					descuento = (importe * 10) / 100;
                    importeFinal = importe - descuento;
                    alert("El costo del destino tiene un descuento 10% " + descuento + " y el total a pagar" + importeFinal);
				} 
				else if (tipoDestino == "Mar del plata" ) {
					descuento = (importe * 20) / 100;
					importeFinal = importe - descuento
					alert("El costo del destino tiene un descuento 20% " + descuento + " y el total a pagar $" + importeFinal);
				    }
				}
			
			 break; 

		case "Verano": 
				  
		     if (Estacion == "Verano") { 
				
					//alert("Selecciono " + Estacion + " como estacion del año con destino " + tipoDestino);
				
					if (tipoDestino == "Cordoba" || tipoDestino== "Cataratas"){
						
						aumento = (importe * 10) /100;
						importeFinal = importe + aumento;
						alert("El costo del destino tiene un aumento 10 % " + aumento + " y el total a pagar " +  importeFinal);
					}
					 else if (tipoDestino == "Mar del plata") {
						
						aumento = (importe * 20)/ 100;
						importeFinal = importe + aumento;
						alert("El costo del destino tiene un aumento 20 % " + aumento + " y el total a pagar " +  importeFinal);
					} 
					 else if (tipoDestino == "Bariloche") {
						
						descuento = (importe * 20) / 100;
						importeFinal = importe - descuento;
						alert("El costo del destino tiene un descuento 20% " + descuento + " y el total a pagar " + importeFinal)
					}
				}		
				 break; 

		case "Otoño":
		case "Primavera":
	 
			if (Estacion == "Otoño" || Estacion =="Primavera") { 
			
				//alert("Selecciono " + Estacion + " como estacion del año con destino " + tipoDestino);
				
				if (tipoDestino == "Bariloche" || tipoDestino == "Cataratas" || tipoDestino == "Mar del plata") {
					
					aumento = (importe *10) /100;
					importeFinal = importe + aumento;
					alert("El costo del destino tiene un aumento 10% " + aumento + " y el total a pagar $ " + importeFinal);
				} else { 
					
					tipoDestino == "Cordoba"
					alert("El costo del destino no tiene descuento " +  importe);
				} 
				
			}
			 break; 
	
	
	}








*/