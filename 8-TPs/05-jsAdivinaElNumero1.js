/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
varialble es una dircion de memoria */
let numeroSecreto; 
let contadorIntentos;
let flag = 0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
    numeroSecreto = Math.round(Math.random()* 99 + 1 );
 // alert(numeroSecreto);
 contadorIntentos = 0;
 alert("listo ya pense un numero... Trata de adivinarlo");
 document.getElementById("txtIdIntentos").value = contadorIntentos;
 document.getElementById("txtIdNumeros").focus(); 
 flag = 1; 
 
 /*contadorIntentos += 1;//sumale uno al contadorintentos  --- es lo mismo contadirIntentos = contadorIntentos + 10;
 // contadorIntentos -=5; / *=3 ;  /= 3; costante
 //contadorIntentos ++; 
 //++contadorIntentos; funciona 
 alert(contadorIntentos);*/
}

function verificar()
{
  let num;

  if (flag == 0 ){ 
    alert("debes precionar primero el boton comenzar");
  } 
  else {
    
    num = parseInt(document.getElementById("txtIdNumero").value);
    contadorIntentos ++;
    document.getElementById("txtIdIntentos").value = contadorIntentos;

    if (num == numeroSecreto )
    { 
      // aca va el codigo usuario ganador
      alert("Usted es un ganador !! y en solo" + contadorIntentos +"intentos");
      alert(`Precio "Comensar" paravolvera empezar`);
     // contadorIntentos = 0;
       flag = 0;
    }
    else if (num > numeroSecreto) 
    {
      //aca va el codigo donde informa que el usuario se paso
      alert("se paso...");
    } else
    {
      // aca va el codigo donde informo que le falta
      alert("le falta");
    }
    
    document.getElementById("txtIdNumero").value = "";
    document.getElementById("txtIdNumeros").focus();
    }
 
  
}
/*
bandera: 
*/