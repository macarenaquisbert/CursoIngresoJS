function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numeroAleatorio;
	let minimo = 10;
	let minimo = 1;
	numeroAleatorio = Math.round(Math.random()* (maximo - minimo) + minimo);

	alert(numeroAleatorio);	

}//FIN DE LA FUNCIÓN

/*
nos debuelve un numero entre 0 sin llegar a 1
ej; 0,9999999999 math.ramdom 
*/