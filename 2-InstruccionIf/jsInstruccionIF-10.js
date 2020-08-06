function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	//let minimo = 10;
	//let minimo = 1;
	
	nota = Math.round(Math.random()* (9 - 1) + 1);
	
	if (nota >= 9 ) {
		
		alert("EXCELENTE" + nota );
	}else if (nota >=4) 
			{
			alert("APROBO"+ nota);
			} else 
			 {
			 	alert("Vamos, la proxima se puede"+ nota);
			 }

	}




}//FIN DE LA FUNCIÓN
/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */