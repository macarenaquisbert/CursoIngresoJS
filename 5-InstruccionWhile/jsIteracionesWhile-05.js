/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;

	sexo = prompt("ingrese el sexo").toLowerCase(); 
	//opcion 1 | q sexo no sea ni f ni m 
	//while (!(sexo == f || sexo == m)); 
	//opcion 2 que sexo sea distinto de f o m 
	while ( sexo != 'f' && sexo != 'm' && sexo != 'M' && sexo !='F') {
	//while ( sexo != 'f' || sexo != 'm' || sexo != 'M'|| sexo !='F')
		sexo = prompt(" Error . ingrese el sexo").toLowerCase();
	} 
	  document.getElementById("txtIdSexo").value = sexo;



}//FIN DE LA FUNCIÓN