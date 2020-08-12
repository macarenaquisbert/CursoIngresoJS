
function mostrar() {
	let edad;
	let estadoCivil;
	let nombre;
	let sexo;
	let temperatura;
	let mensajeEstadoCivil;
	let mensajeSexo;
	let continuar = "si";
	let banderapersonaConFiebre = false;
	let temperaturaPersonaConFiebre = 0;
	let nombrePersonaConFiebre;
	let mayoresDeEdadViudos = 0;
	let hombresSolterosOViudos = 0;
	let personasTerceraEdad = 0;
	let hombresSolteros = 0;
	let acumEdadHombresSolteros = 0;
	let promedio;

	do {
		nombre = prompt("Nombre: Ingrese su nombre");

		// Validar edad
		edad = parseInt(prompt("Edad: Ingrese su edad"));
		while (edad <= 0 || edad > 117 || isNaN(edad)) {
			edad = parseInt(prompt("Incorrecto. Ingrese una edad válida."));
		}

		// Validar sexo 
		sexo = prompt('Sexo: Ingrese "f" para femenino o "m" para masculino.').toLowerCase();
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Incorrecto. F para 'Femenino' ó M para 'Masculino'.").toLowerCase();
		}
		mensajeSexo = "Sexo: " + queSexoEs(sexo);

		estadoCivil = prompt('Estado Civil: Ingrese S, C , V ("soltero", "casado" o "viudo").').toLowerCase();
		while (estadoCivil != "s" && estadoCivil != "S" && estadoCivil != "C" && estadoCivil != "c" && estadoCivil != "V" && estadoCivil != "v") {
			estadoCivil = prompt('Incorrecto. Ingrese "soltero", "casado" o "viudo".').toLowerCase();
		}
		mensajeEstadoCivil = "Estado civil: " + queEstadoCivilEs(estadoCivil);
		
		temperatura = parseFloat(prompt("Temperatura corporal: Ingrese temperatura corporal en °C"));
		while (temperatura < 35 || temperatura > 42 || isNaN(temperatura)) {
			temperatura = parseFloat(prompt("Incorrecto: Ingrese una temperatura corporal en °C válida."));
		}

		// Persona con mayor temperatura
		if (!(banderapersonaConFiebre) || temperatura > temperaturaPersonaConFiebre) {
			temperaturaPersonaConFiebre = temperatura;
			nombrePersonaConFiebre = nombre;
			banderapersonaConFiebre = true;
		}

		// Mayores de edad viudos
		if (edad >= 18 && estadoCivil == "viudo") {
			mayoresDeEdadViudos++
		}

		//Hombres solteros o viudos
		if (sexo == "m" && estadoCivil == "soltero" || estadoCivil == "viudo") {
			hombresSolterosOViudos++
		}

		// Personas de la tercera edad con más de 38 de fiebre
		if (edad >= 60 && temperatura >= 38) {
			personasTerceraEdad++
		}

		// Promedio de edad hombres solteros
		if (sexo == "m" && estadoCivil == "soltero") {
			hombresSolteros++
			acumEdadHombresSolteros += edad;
		}

		continuar = prompt("¿Desea ingresar a otra persona?").toLowerCase();
	} while (continuar == "si");

	// promedio
	promedio = acumEdadHombresSolteros / hombresSolteros;

	// Imprimir cosas
	console.log("A. La persona con mayor temperatura se llama: " + nombrePersonaConFiebre);
	console.log("B. Total de mayores de edad viudos: " + mayoresDeEdadViudos);
	console.log("C. Total de hombres solteros o viudos: " + hombresSolterosOViudos);
	console.log("D. Total de personas mayores de 60 y con más de 38 °C: " + personasTerceraEdad);
	console.log("E. Promedio de edad de hombres solteros: " + promedio);

}

function queSexoEs(sexo) {
	if (sexo == "f") {
		return sexo = "Femenino";
	} else if (sexo == "m") {
		return sexo = "Masculino"
	}
}

function queEstadoCivilEs(estadoCivil) {
	switch (estadoCivil) {
		case "soltero":
			return "Soltero/a"
			break;
		case "casado":
			return "Casado/a"
			break;
		case "viudo":
			return "Viudo/a"
			break;
	}
}

/*function mostrar()
{
	let edad ;
	let estadoCivil;
	let nombre;
	let sexo;
	let temperatura;
	let seguir;
	let mensajeSexo;
	let mensajeEstadoCivil;
	let flagconFiebre = false;
	let temperaturaPersonasConFiebre =0;
	let nombrePersonaconFiebre; 
	let matoresdeEdadViudas =0;
	let hombresSolterosoViudos =0;
	let terceraEdad =0;
	let hombresSolteros =0;
	let acumEdadHombresSolteros =0;
	let nombrePersonaconFiebre;
	let mayoresdeEdadViudas=0;
	let promedio;

	do {
		
		nombre = prompt("Ingrese el nombre");
		while (!isNaN(nombre)) {
	
		nombre = prompt("Incorrecto. Ingrese de nuevo el nombre");
		}
        edad = parseInt(prompt("Ingrese el edad"));
		while (edad <=1 || edad > 100 || isNaN(edad)) {
	
		edad = parseInt(prompt("Incorrecto. Ingrese de nuevo el edad"));
		}
		sexo = parseInt(prompt("Ingrese el sexo (F o M)"));
		while (sexo != "f" && sexo != "m") {
		
		sexo = parseInt(prompt("Incorrecto. Ingrese de nuevo el sexo F o M"));	
		}
		mensajeSexo = "Sexo: " + queSexoEs(sexo);
		
		estadoCivil = prompt('Estado Civil: Ingrese "soltero", "casado" o "viudo".').toLowerCase();
		while (estadoCivil != "s" && estadoCivil != "c" && estadoCivil != "v") {
			
			estadoCivil = prompt('Incorrecto. Ingrese "soltero", "casado" o "viudo".').toLowerCase();
		}
		mensajeEstadoCivil = "Estado civil: " + queEstadoCivilEs(estadoCivil);
		
		temperatura = parseFloat(prompt("Temperatura corporal: Ingrese temperatura corporal en °C"));
		while (temperatura < 35 || temperatura > 42 || isNaN(temperatura)) {
			temperatura = parseFloat(prompt("Incorrecto: Ingrese una temperatura corporal en °C válida."));
		}
        if (!(flagconFiebre) || temperatura > temperaturaPersonasConFiebre) {
			temperaturaPersonasConFiebre = temperatura;
			nombrePersonaconFiebre = nombre;
			flagconFiebre = true;

//---------------------------------------------------------------------------------
		}if (edad >= 18 && estadoCivil == "viudo") {
			mayoresdeEdadViudas ++;
		}

		//Hombres solteros o viudos
		if (sexo == "m" && estadoCivil == "soltero" || estadoCivil == "viudo") {
			hombresSolterosoViudos++;
		}

		// Personas de la tercera edad con más de 38 de fiebre
		if (edad >= 60 && temperatura >= 38) {
			terceraEdad ++;
		}

		// Promedio de edad hombres solteros
		if (sexo == "m" && estadoCivil == "soltero") {
			hombresSolteros++;
			acumEdadHombresSolteros += edad;
		}



		seguir = prompt("Desea ingresar a otra persona");
	}while (seguir == 's');

	promedio = acumEdadHombresSolteros / hombresSolteros;

	// Imprimir cosas
	console.log("A. La persona con mayor temperatura se llama: " + nombrePersonaConFiebre);
	console.log("B. Total de mayores de edad viudos: " + mayoresDeEdadViudos);
	console.log("C. Total de hombres solteros o viudos: " + hombresSolterosOViudos);
	console.log("D. Total de personas mayores de 60 y con más de 38 °C: " + personasTerceraEdad);
	console.log("E. Promedio de edad de hombres solteros: " + promedio);


}

function queSexoEs()
{
	switch (sexo) {
		case 'F':
		case 'f':
			 
			 sexo = "Femenimo";
			 cantMujer++;

			break;
	
		case 'M':
		case 'm':
			
			 sexo = "Maculino";
			 cantHombre++;

			break;
	}

}
function queEstadoCivilEs(){

	switch (estadoCivil) {
		case 'S':
		case 's':
		  
		if (sexo == "Masculino") {
			estadoCivil = "Soltero";
			
		}else {
			estadoCivil = "Soltera";
			cantidadS ++;
		}
		  
		break;
		case 'C':
		case 'c':

		if (sexo == "Masculino") {
			estadoCivil = "Casado";
			
		} else {
			estadoCivil = "Casada";
		}

		break;
		case 'V':
		case 'v':

		if (sexo == "Masculino") {
			estadoCivil = "Viudo";
		} else {
			estadoCivil = "Viuda";
		}

	}
}*/




