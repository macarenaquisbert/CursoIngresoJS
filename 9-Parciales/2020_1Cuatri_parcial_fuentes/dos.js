function mostrar()
{
  let tipo;
  let productoCaro; 
  let acumA=0;
  let acumC=0;
  let acumCemt =0;
  let cantMasBolsas;
  let precioCaro;
  let tipoBolsaMayor;
  let precio;
  let descuento;
  let precioF;
  let SinDescuento;
  let cantidabolsas;
  let contadorBolsasA=0;
  let contadorBolsasCal=0;
  let contadorBolsasC =0;
  let seguir;
  let flagmenor =0;
  let flagmayor =0;
  let flag=0;
  
  do {
     
       tipo = prompt("Ingrese el tipo de producto (a(rena), c(al) , ct(cemento))");

       while (tipo != "a" && tipo != 'A' && tipo !='c' && tipo !='C' && tipo != 'ct' && tipo != 'CT'){

        tipo = prompt("Error. Ingrese de nuevo el tipo de producto (a(rena), c(al) , ct(cemento) )");
       }

       precio = parseInt(prompt("Ingrese el precio mayor a 0"))

       while ( precio < 0){

        precio = parseInt(prompt(" Error.Ingrese de nuevo el precio mayor a 0"));
      }

       cantidabolsas = parseInt(prompt("Ingrese la cantidad"));

       while (cantidabolsas <= 1){

        cantidabolsas = parseInt(prompt(" Error. Ingrese de nuevo la cantidad"));
       }
        switch (tipo) {
          case 'a':
          case 'A':
            
            tipo = "Arena";
            acumA += cantidabolsas;
            precioF = precio * cantidabolsas;
            contadorBolsasA++;

            break;
          case 'c':
          case 'C':

            tipo = "Cal";
            acumC += cantidabolsas;
            precioF = precio * cantidabolsas;
            contadorBolsasCal++;

            break;
          case 'ct':
          case 'CT':
             tipo = "Cemento";
             acumCemt += cantidabolsas;
             precioF = precio * cantidabolsas;
             contadorBolsasC ++;
            break;
        }

    seguir = prompt("Quiere seguir ingresando tipos de productos");

   } while (seguir == 's');
   
   //descuento 
   if (cantidabolsas >= 10 && cantidabolsas <= 30 || flagmenor ==0) {
         
    descuento = (precio * 15 )/ 100;
    precioF = precio - descuento;
    flagmenor = 1;

  } else if (cantidabolsas >= 30 || flagmayor == 0) {
     
    descuento = (precio * 25 )/ 100;
    precioF = precio - descuento; 

    flagmayor = 1;
   }
   //precio mas caro-----
   if (precio > precioCaro || flag ==0) {
     
    precioCaro = precio;
    cantMasBolsas = cantidabolsas;
    productoCaro = tipo
    flag = 1; 
   }

   console.log("a) El importe total a pagar , bruto sin descuento y " + precio );
   console.log("b) el importe total a pagar con descuento (solo si corresponde) " + precioF);
   console.log("d) Informar el tipo con mas cantidad de bolsas " + cantMasBolsas);
   console.log("f) El tipo mas caro " + productoCaro + precioCaro );


   /*document.write("a) El importe total a pagar , bruto sin descuento y " + precio + "</br>");
   document.write("b) el importe total a pagar con descuento (solo si corresponde) " + precioF +"</br>");
   document.write("d) Informar el tipo con mas cantidad de bolsas " + cantMasBolsas +"</br>");
   document.write("f) El tipo mas caro " + productoCaro + precioCaro + "</br>");
  */

}
/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una
 compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
 */