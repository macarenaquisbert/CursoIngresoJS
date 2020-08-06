function mostrar()
{
	//tomo la edad  
	let  edad;
	let estado;

	edad= parseInt(document.getElementById("txtEdad").value);
	estado= document.getElementById("estadoCivil").value;

     if (edad >= 18 && estado == "Soltero" ) {
	// if (estado == "Soltero && !(edad >= 18)")
		alert('Es soltero y no es menor.');
	 }


}//FIN DE LA FUNCIÓN
/*Al ingresar una edad menor a 18 años
 y un estado civil distinto a "Soltero", 
 NO HACER NADA,
pero si no es asi, y es soltero
 y no es menor, mostrar el siguiente mensaje:
  'Es soltero y no es menor.' */