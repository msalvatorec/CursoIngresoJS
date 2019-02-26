
function mostrar()
{
	var numeroIngresado = prompt("Por favor ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	var sumando=0;


	for (var numeroAnterior=Math.floor(numeroIngresado/2); numeroAnterior>1; numeroAnterior--)
	{
		
		if ((numeroIngresado%numeroAnterior)==0){
			sumando=sumando+numeroAnterior;
		}

	}

	if (sumando+1==numeroIngresado)
	{
		alert("El número "+numeroIngresado+" es un número perfecto");
	}
	else
	{
		alert("El número "+numeroIngresado+" NO es un número perfecto");	
	}

}



/* Ejercicio para buscar todos los numeros divisores de un numero ingresado por prompt y determinar si es primo o no
function mostrar()
{
	var numeroIngresado = prompt("Por favor ingrese un número");
	numeroIngresado = parseInt(numeroIngresado);
	var esPrimo=1;


	for (var numeroAnterior=Math.floor(numeroIngresado/2); numeroAnterior>1; numeroAnterior--)
	{
		
		if ((numeroIngresado%numeroAnterior)==0){
			esPrimo=0;
			alert("Es divisible por: "+numeroAnterior);
		}

	}

	if (esPrimo==1)
	{
		alert("El número "+numeroIngresado+" es primo");
	}


}
*/

//Ver de nuevo, no anda nada; es horrible este codigo
//Nunca entendi que quiso hacer aca...

/*function mostrar()
{
	
	var numeroIngresado = prompt("Por favor ingrese su dato");
	numeroIngresado = parseInt(numeroIngresado);

	alert("Numero ingresado: "numerosAnteriores);

	for (numerosAnteriores=numeroIngresadogresado-1; numerosAnteriores>1;numerosAnteriores--)
	{		
		console.log(numerosAnteriores);	
		alert(numerosAnteriores);

		if (numeroIngresado%numerosAnteriores)
		{
			console.log("Es primo");	
		}
	

	}

	if (numerosAnteriores==1)
	{			
		console.log("Es primo");
	}	
		
	else
	{
		console.log("No es primo");
	}


}*/