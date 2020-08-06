/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let numero;
	let acumPos =0;
	let acumNeg =0;
	let CantidadPos=0;
	let CantidadNeg=0;
	let CantidadCeros=0;
	let CantidaddePares =0;
	let PromedioPos =0;
	let PromedioNeg =0;
	let diferencias ;
	let seguir;
	
	do{ 
	//declarar contadores y variables
	numero = parseInt(prompt("Ingrese un numero; "));
	//ananlizo el signo del numero(positivo negativo y numero par)
	if (numero <= 0 ) {
    //cae cuando sea negativo
		acumNeg += numero;
		CantidadNeg++;
	}//cae cuando sea positivo
	else if (numero >= 1) {

		acumPos += numero;
		CantidadPos++;
     //cae cuando sea ceros---> if (numero == 0)
	} else{
		CantidadCeros ++;
	}//cae cuando sea pares
	if (numero % 2 == 0) {
		
		CantidaddePares++;
	}
    
    seguir = prompt("¿Quiere seguir ingresando numeros?");
	} while (seguir == 's');
    //codigo fuera del bucle---> calculo el promedio y diferencia
	if (CantidadNeg != 0){ 
	PromedioNeg = acumNeg / CantidadNeg;
	}else {
		PromedioPos = 0;
	}
	if (CantidadPos != 0){ 
	PromedioPos = acumPos / CantidadPos;
	}
	diferencias = CantidadPos - CantidadNeg;
	
	document.write("1-Suma de los negativos." + acumNeg + "</br>");
    document.write("2-Suma de los positivos."+ acumPos + "</br>");
    document.write("3-Cantidad de positivos." + CantidadPos + "</br>");
    document.write("4-Cantidad de negativos." + CantidadNeg + "</br>");
    document.write("5-Cantidad de ceros." + CantidadCeros +"</br>");
    document.write("6-Cantidad de números pares " + CantidaddePares + "</br>");
	document.write("7-Promedio de positivos" + PromedioNeg+ "</br>");
	document.write("8-Promedios de negativos"+ PromedioPos + "</br>");
	document.write("9-Diferencia entre positivos y negativos" + diferencias + "</br>");
    
}//FIN DE LA FUNCIÓN