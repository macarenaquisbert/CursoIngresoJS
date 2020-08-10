/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y 
censos nos pide realizar una carga de datos validada e ingresada por ventanas 
emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12. Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive. X
B.	Sexo, “M” para masculino y “F” para femenino X
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos X
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 let edad;
 let Sexo;
 let Estadocivil;
 let sueldobruto;
 let numerodeLEGAJO; 
 let Nacionalidad;
 let seguir ;
 

 do { 

    do {
	 
	edad = parseInt(prompt("ingrese la edad"));

	}while (edad < 18 || edad > 90 || isNaN(edad));
	
    do {
	 
	Sexo = prompt("ingrese el sexo de la persona");

	} while (Sexo != 'f' && Sexo != 'm' && Sexo != 'F' && Sexo != 'M'){
		
		switch (Sexo) {
			case 'f':
			case 'F':
				Sexo = 'femenino';
				break;
		    case 'm':
			case 'M':
				Sexo = 'Masculino'
				break;
		}
	}
	do {
	 
	Estadocivil = prompt("ingrese el estado cilvil de la persona( 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos)");

    } while (Estadocivil != 1 && Estadocivil != 2 && Estadocivil != 3 && Estadocivil != 4 ){
	 
	switch (Estadocivil) {
		case '1':
            if (Sexo == 'm'){ 

			Estadocivil = 'Soltero';
		    } else {
              Estadocivil = 'Soltera';
			}
			break;

        case '2':
	        if (Sexo == 'm') {
		
			Estadocivil = 'Casado';
			} else {
			Estadocivil = 'Casado';
			}
			break;
	    case '3':
			if (Sexo == 'm') {
				
		    Estadocivil = 'Divorciado';
			}else {
			Estadocivil = 'Divorciada';
			}
			break;
		case '4': 
			if (Sexo == 'm') {
				
			Estadocivil = 'Viudo';
			}
			Estadocivil = 'Viudo';
			
			break;
	}
 }
   do {
	   
	    sueldobruto = parseInt(prompt("Ingrese el sueldo bruto"));

   } while (sueldobruto <= 8000 );

  do {
	  
      numerodeLEGAJO = parseInt(prompt("Ingrese el numero de legajo"));

  } while (numerodeLEGAJO <= 1000 && numerodeLEGAJO < 9999 || isNaN(numerodeLEGAJO));
   
  do {
	
	Nacionalidad = prompt("Ingrese la nacionalidad que pertenece (“A” para argentinos, “E” para extranjeros, “N” para nacionalizados)");

  } while (Nacionalidad != 'a' && Nacionalidad != 'e' && Nacionalidad != 'n'  && Nacionalidad != 'A' && Nacionalidad != 'E' && Nacionalidad != 'N' ){ 

	switch (Nacionalidad) {
	  case 'a':
	  case 'A':
		  
		  Nacionalidad = 'Argentina';
		  break;
  
	  case 'e':
	  case 'E':
		  
		 Nacionalidad = 'Extranjeros';
		 break;
	 case 'n':
	 case 'N':

		 Nacionalidad = 'Nacionalidad';
		 break;
  }
}
  seguir = prompt("¿Quiere ingresar de nuevo los datos?");

 }while (seguir == 's');
 
   console.log("Edad " + edad);
   console.log("Sexo " + Sexo);
   console.log("Estado civil " + Estadocivil);
   console.log("Numero de legajo " + numerodeLEGAJO);
   console.log("Sueldo Bruto " + sueldobruto);
   console.log("Nacionalidad " + Nacionalidad );








}
// cuando no conoscozco de antemano la cantidad de repeticiones uso while
//cuando conozco de antemano la cantidad de repeticiones uso for
// cuando quiero que el codigo se ejecute por lo menos una vez uso do - while