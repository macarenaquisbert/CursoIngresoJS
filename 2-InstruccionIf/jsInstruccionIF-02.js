function mostrar()
{
	let edad;
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if ( edad >= "15") {
		
		alert("Niña Bonita");
	} 
	alert("Fin de la funcion");

}

//FIN DE LA FUNCIÓN

/*Al ingresar una edad debemos informar 
solo si la persona es mayor de edad 


num == string
15 == "15" verdadero
15 == 15    v
"15" == "15" v
"15" == 15   v
es mas estricto ===
15 ===15 v
15 =="15" f







let peso;
    let precioXpeso;
    let tipo;
    let precio;
    let descuento;
    let precioconDescuento;
	let bandera = 0;
	let banderaTrs = 0;
	let Sindescuento;

	  precio = parseInt(prompt("ingrese el precio"));
	  peso = parseInt(prompt("ingrese el peso"));
       
       if ( peso >= 100 && peso <=300 || bandera == 0)
       {
           precioXpeso = precio * peso ;
           descuento = (precioXpeso*15 ) / 100;
		   precioconDescuento = precioXpeso - descuento;
		   bandera == 1;
	   } else {
			precioXpeso = precio*peso; 
			precioXpeso == Sindescuento;
			banderaTrs == 1;
	   }
	   if (bandera == 1){ 
		document.write("precio con descuento " +descuento + "importe con descuento" + precioconDescuento);
		}
	   if(banderaTrs == 1)
	   {
       document.write(" sin descuenro ")
	   }
*/