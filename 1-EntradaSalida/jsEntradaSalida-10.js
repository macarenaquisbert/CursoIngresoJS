/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
*/

function mostrarDescuento()
{
    let importe;
    let Descuento;
    let importFinal;
    
    importe = parseFloat(document.getElementById("txtIdImporte").value);
    
    Descuento = importe * 25 /100;
    importFinal = Descuento - importe;
    // importeFINAL = impote - descuento;
    // importefinal = importe * .75; 
    
    alert (" El descuento es " + Descuento );
    
    document.getElementById("txtIdResultado").value = importFinal.toFixed(2) ;


}

/*

tofixed(pongo numeros ) = te va devolver y va colocar 
2 cifras decimales : va a redondiar el mas sercano 8.2 
CONTL - SHIP L selecciona todos los valores repetidos 



----------------------------------------------------------
    var importeINGRESADO ;

    importeINGRESADO =document.getElementById ("txtIdImporte").value;
    alert(importeINGRESADO);
    txtIdResultado.value = " el importe es " + importeINGRESADO;
    document.getElementById("txtIdResultado").value = " otro imporet es " + importe

-------------------------------------------------------------------------------


*/
