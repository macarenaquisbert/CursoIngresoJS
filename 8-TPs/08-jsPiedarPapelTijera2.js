let eleccionMaquina;
let eleccionHumano;
let numeroalAzar;
let ContadorDeEmpates = 0;
let ContadorDeGanadas = 0;
let ContadorDePerdidas = 0;

function comenzar()
{	
	numeroalAzar = Math.floor(Math.random() * 2 + 1);

	switch(numeroalAzar)
	{
		case 1:
			
			eleccionMaquina = "Piedra";
			
			break;
			
		case 2:
			
			eleccionMaquina = "Papel";
			
			break;
			
		case 3:
			
			eleccionMaquina = "Tijera";
			
			break;
	}
	
}

function piedra()
{
	alert("La Máquina seleccionó: " + eleccionMaquina);
	
	eleccionHumano = "Piedra";
	
	if(eleccionHumano == eleccionMaquina)
	{
		alert("Empate");
		
		ContadorDeEmpates++;
	}
	
	else if(eleccionMaquina == "Tijera")
	{
		alert("Ganaste");
		
		ContadorDeGanadas++;
	}
	
	else
	{
		alert("Ganó la Máquina");
		
		ContadorDePerdidas++;
	}
	
	mostrarResultado()//comenzar();
}

function papel()
{
	alert("La Máquina seleccionó: " + eleccionMaquina);
	
	eleccionHumano = "Papel";
	
	if(eleccionHumano == eleccionMaquina)
	{
		alert("Empate");
		
		ContadorDeEmpates++;
	}
	
	else if(eleccionMaquina == "Piedra")
	{
		alert("Ganaste");
		
		ContadorDeGanadas++;
	}
	
	else
	{
		alert("Ganó la Máquina");
		
		ContadorDePerdidas++;
	}
	
	mostrarResultado()//comenzar();
}

function tijera()
{
	alert("La Máquina seleccionó: " + eleccionMaquina);
	
	eleccionHumano = "Tijera";
	
	if(eleccionHumano == eleccionMaquina)
	{
		alert("Empate");
		
		ContadorDeEmpates++;
	}
	
	else if(eleccionMaquina == "Papel")
	{
		alert("Ganaste");
		
		ContadorDeGanadas++;
	}
	
	else
	{
		alert("Ganó la Máquina");
		
		ContadorDePerdidas++;
	}
	
	mostrarResultado() //comenzar();
}

function mostrarResultado()
{
	document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates; 
	document.getElementById("txtIdPerdidas").value = ContadorDePerdidas; 
	document.getElementById("txtIdGanadas").value = ContadorDeGanadas; 
	
	comenzar();
}

/*Enunciado:

if (eleccionMaquina == piedra) {
		alert("Empate");
	} else if(eleccionMaquina == papel) {
		alert("Ganaste");
	}else {
		alert("Perdida");
	}
---------------------------------------------------------------------------------
let eleccionMaquina;
let eleccionHumano;
let ContadorDeEmpates=0;
let ContadorDeGanadas=0;
let ContadorDePerdidas=0;
let cantidad;
let ganaste;
let perdida;
let empates;
let candidadevecesjugadas = 0;
/*3. Piedra, Papel o Tijera (v 2.0):
Ahora debemos informar cuantas veces se ganó, 
perdió o empató desde la última recarga de página 
function comenzar()
{

	//Genero el número RANDOM entre 1 y 3
	eleccionMaquina = Math.round(Math.random()* 2 + 1 );
	alert(eleccionMaquina);
	switch (eleccionMaquina) {
		case 1:
			eleccionMaquina == "Piedra";
			break;
	    case 2:
			eleccionMaquina == "Papel";
			break;
		case 3:
			eleccionMaquina == "Tijera";
			break;
	}

}//FIN DE LA FUNCIÓN
function piedra()
{
	switch (eleccionMaquina) {
		case 1:
		
		    eleccionHumano == eleccionMaquina;
			alert("Empate"); 
			ContadorDeEmpates += cantidad;
			
			break;
		case 2:
		   eleccionHumano ==  eleccionMaquina;
		   alert("Ganaste");
		   ContadorDeGanadas += cantidad;
		    break;
		case 3:
			eleccionMaquina == eleccionMaquina;
			alert("Perdida");
			ContadorDePerdidas += cantidad;
			break;
	}

}//FIN DE LA FUNCIÓN
function papel()
{
    switch (eleccionMaquina) {
		case 1:
			eleccionHumano == eleccionMaquina;
			alert("Empate"); 
			ContadorDeEmpates += cantidad;
			break;
		case 2:
		   eleccionHumano ==  eleccionMaquina;
		   alert("Ganaste");
		   ContadorDeGanadas += cantidad;
		    break;
		case 3:
			eleccionMaquina == eleccionMaquina;
			alert("Perdida");
			ContadorDePerdidas += cantidad;
			break;
	}
}//FIN DE LA FUNCIÓN
function tijera()
{
	switch (eleccionMaquina) {
		case 1:
			eleccionHumano == eleccionMaquina;
			alert("Empate"); 
			ContadorDeEmpates +=cantidad;
			break;
		case 2:
		   eleccionHumano ==  eleccionMaquina;
		   alert("Ganaste");
		   ContadorDeGanadas += cantidad;
		    break;
		case 3:
			eleccionMaquina == eleccionMaquina;
			alert("Perdida");
			ContadorDePerdidas += cantidad;
			break;
	}
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{

     document.getElementById("txtIdGanadas").value = ContadorDeEmpates;
	 document.getElementById("txtIdPerdidas").value = ContadorDePerdidas;
	 document.getElementById("txtIdEmpatadas").value = ContadorDeEmpates;

 
}
*/