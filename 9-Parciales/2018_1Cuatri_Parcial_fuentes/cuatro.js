function mostrar()
{
	/*al realizar una compra, si compra de mas de dos productos 
	se realiza un descuento del 10% y si supera los $2000 se agrega 
	un descuento adicional de 15%, si el pago es con tarjeta y no efectivo 
	al precio final se le agrega un 10% de recargo*/

	var cantidadProductos = prompt("Ingrese cantidad de productos comprados");
	var importeTotal = prompt("Ingrese importe TOTAL de la compra");
	var formaDePago = prompt("Ingrese el metodo de pago (en minusculas: 1- tarjeta o 2 - cualquier otro)");
	var importeConSinDescuentos;
/* si gato 10000 , y pago en efectivo, deberia pagar  7500*/
	importeTotal=parseInt(importeTotal);
	cantidadProductos=parseInt(cantidadProductos);
	importeConSinDescuentos=importeTotal;

	if(cantidadProductos>2)
		{
			if(importeTotal>2000)
				{
					importeConSinDescuentos=importeConSinDescuentos*0.75;
				}
			else
				{
					importeConSinDescuentos=importeConSinDescuentos*0.9;
				}
		}


	if (formaDePago=="tarjeta")
	{
		importeConSinDescuentos=importeConSinDescuentos*1.1;
	}

	alert("El importe total es de: "+importeConSinDescuentos);



	
	
}
