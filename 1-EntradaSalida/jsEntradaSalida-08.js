/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let divisor;
	let dividendo;
	
	let resto;
	
	divisor = document.getElementById("txtIdNumeroDividendo").value;
	
	divisor = parseFloat(divisor);
	
	dividendo = document.getElementById("txtIdNumeroDivisor").value;
	
	dividendo = parseFloat(dividendo);

	resto = dividendo % divisor;

	alert("la resto " + resto);
}
/*


*/