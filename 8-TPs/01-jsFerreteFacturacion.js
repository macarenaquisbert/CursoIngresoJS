/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
     let precio1;
     let precio2;
     let precio3;
     let suma;
     
     precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
     precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
     precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
     
     suma = precio2 + precio3 + precio1;

     alert("la suma de los precios es $ " +  suma.toFixed(2));
}

function Promedio () 
{
   let precio1;
   let precio2;
   let precio3;
   let promedio;

   precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
   precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
   precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
   
   promedio = (precio1 + precio2 + precio3) / 3;
   
   alert("El promedio de los precios es $ " + promedio.toFixed(2));
}
function PrecioFinal () 
{
    let precio1;
    let precio2;
    let precio3;
    let iva;
    let PrecioFinal;
 
    precio1 = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precio2 = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precio3 = parseFloat(document.getElementById("txtIdPrecioTres").value);
    
    PrecioFinal = precio3 + precio2 + precio1;
    iva = PrecioFinal * 21 /100;
    //iva = suma *.21;
    
    alert("El iva de los precios es $ " + iva.toFixed(2));
}