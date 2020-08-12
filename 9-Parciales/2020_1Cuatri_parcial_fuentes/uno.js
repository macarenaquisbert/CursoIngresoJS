
function mostrar()
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total */
{

 let tipo;
 let alcoholBarato;
 let fabricanteBarato;
 let marcaBarato;
 let cantidadBarato;
 let mayorMarca;
 let mayorFabricante;
 let flagAl =0;
 let flagMayor =0;
 let flagJ =0;
 let precio;
 let contadorB=0;
 let contadorA =0;
 let contadorJ =0;
 let CantidaddeUnidades;
 let contadorTipo =0;
 let mayorCantidad;
 let Marca;
 let fabricante;
 let JabonmasUnid;
 let acumtotal=0;
 let acumB=0;
 let acumA=0;
 let acumJ=0;
 let promedio ;

  for (let i = 0; i < 5 ; i ++){ 
   do {
	   tipo = prompt("ingrese el tipo (barbijo ,jabón o alcohol) de producto que compre");

   } while (tipo != 'b'&& tipo != 'j' && tipo !='a' && tipo != 'B' && tipo != 'J' && tipo != 'A');

   do {
		CantidaddeUnidades= parseInt(prompt("Ingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)"));
	 
	} while (CantidaddeUnidades <= 1 && CantidaddeUnidades > 1000 || isNaN(CantidaddeUnidades));

	switch (tipo) {
		case 'a':
		case 'A':
			tipo = "Alcohol";
			acumA += CantidaddeUnidades;
			contadorA ++;

			break;
        case 'b':
		case 'B':
			 tipo = "Balbijo";
			 acumB += CantidaddeUnidades;
			 contadorB ++;

			break;
		case 'j':
		case 'J':
			tipo = "Jabon"
			acumJ += CantidaddeUnidades;
			contadorJ ++;

		   break;
	}
   
   do{
	  
	  precio = parseInt(prompt("Ingrese el precio (validar entre 100 y 300) del producto"));

   }while (isNaN(precio) || precio < 100 && precio > 300);
	
   do {
	   Marca = prompt("Ingrese la marca del producto");
   } while (!isNaN(Marca));

   do {
	   fabricante = prompt("Ingrese fabricante");
   } while (!isNaN(fabricante));
//alchol barato y fabrica y marca-----------------------------------
   if ( flagAl == 0 || tipo != 'a' || precio < alcoholBarato ) {
	   
	   alcoholBarato = precio;
	   marcaBarato = Marca;
       cantidadBarato = CantidaddeUnidades;
	   fabricanteBarato = fabricante;
	   flagAl = 1;   
   } //el tipo de proc con mas unidades 
   if (CantidaddeUnidades > mayorCantidad || flagMayor == 0 ) {
	
	  mayorCantidad =  CantidaddeUnidades;
	  mayorFabricante = fabricante;
	  mayorMarca = Marca;

	  flagMayor = 1;
   } 
  }  
   // acumtotal = acumJ + acumB + acumA;
  
    promedio = (acumA + acumB + acumJ) / 5; 

	if (flagAl = 1){ 
  
		document.write("a) Del más barato de los Alcohl $"+ alcoholBarato  + " la cantidad de unidades " + cantidadBarato +" y el fabricante " + fabricanteBarato +"</br>");
    }
   document.write("b) Del tipo con mas unidades " + mayorCantidad + ", el promedio por compra " + promedio + "</br>");
   document.write(" c) Cuántas unidades de jabones hay en tota" + acumJ + "</br>");

}
