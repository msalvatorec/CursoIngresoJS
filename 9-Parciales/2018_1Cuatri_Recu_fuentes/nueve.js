function mostrar()
{	

	var cantidadTemperaturasHabitatPares=0;
	var nombreAnimalMasPesado;
	var pesoMaximo=0;
	var cantidadAnimalesTemperaturaHabitatNegativa=0;
	var sumaTodosLosPesos=0;
	var pesoMaximoHabitatTemperaturaNegativa=0;
	var pesoMinimoHabitatTemperaturaNegativa=1001;
	var promedioDePesosAnimales=0;
	var contadorAnimalesIngresados=0;
	var nombreAnimal;
	var pesoAnimal;
	var temperaturaHabitatAnimal;


	var quiereIngresarAnimal="s";
	
	while(quiereIngresarAnimal=="s")
	{
		nombreAnimal = prompt("Ingrese nombre del animal");
	
		pesoAnimal= prompt("Ingrese peso del animal (debe ser entre 1kg y 1000kg");
		while (isNaN(pesoAnimal)||pesoAnimal<1||pesoAnimal>1000)
		{
			pesoAnimal=prompt("El valor ingresado no corresponde a un peso válido. Ingrese un peso válido (1 a 1000).");
			pesoAnimal=parseInt(pesoanimal);
		}
		pesoAnimal=parseInt(pesoAnimal);

		 temperaturaHabitatAnimal=prompt("Ingrese la temperatura del habitat del animal (debe ser entre -30ªC y 30ªC)");
		while (isNaN(temperaturaHabitatAnimal)||temperaturaHabitatAnimal<-30||temperaturaHabitatAnimal>30)
		{
			temperaturaHabitatAnimal=prompt("El valor ingresado no corresponde a un peso válido. Ingrese un peso válido (-30 a 30).")
		}

		quiereIngresarAnimal=prompt("¿Desea ingresar los datos de otro animal? Ingrese 's' para SI o cualquier otra cosa para NO");

		if (temperaturaHabitatAnimal%2==0)
		{
			cantidadTemperaturasHabitatPares++;
		}

		if (pesoMaximo<pesoAnimal)
		{
			pesoMaximo=pesoAnimal;
			nombreAnimalMasPesado=nombreAnimal;
		}

		if (temperaturaHabitatAnimal<0)
		{
			cantidadAnimalesTemperaturaHabitatNegativa++;
			if (pesoMaximoHabitatTemperaturaNegativa<pesoAnimal)
			{
				pesoMaximoHabitatTemperaturaNegativa=pesoAnimal;
			}
			if (pesoMinimoHabitatTemperaturaNegativa>pesoAnimal)
			{
				pesoMinimoHabitatTemperaturaNegativa=pesoAnimal;
			}
		}

		contadorAnimalesIngresados++;

		sumaTodosLosPesos=sumaTodosLosPesos+pesoAnimal;

	}

	promedioDePesosAnimales=sumaTodosLosPesos/contadorAnimalesIngresados;

	document.write("La cantidad de temperaturas pares es de: "+cantidadTemperaturasHabitatPares+"<br>");
	document.write("El nombre del animal más pesado es: "+nombreAnimalMasPesado+" y su peso es de: "+pesoMaximo+"<br>");
	document.write("La cantidad de animales que vive en habitats con temperatura menor a 0ªC es de: "+cantidadAnimalesTemperaturaHabitatNegativa+"<br>");
	document.write("El promedio de todos los pesos es de: "+promedioDePesosAnimales+" Kg<br>");
	document.write("<br>Animales con habitats de temperaturas bajo cero:<br>");
	document.write("       - Peso minimo: "+pesoMinimoHabitatTemperaturaNegativa+"<br>");
	document.write("       - Peso máximo: "+pesoMaximoHabitatTemperaturaNegativa+"<br>");

}
