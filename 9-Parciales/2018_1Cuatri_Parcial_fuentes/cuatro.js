function mostrar()
{
	/*al realizar una compra, si compra de mas de dos productos 
	se realiza un descuento del 10% y si supera los $2000 se agrega 
	un descuento adicional de 15%, si el pago es con tarjeta y no efectivo 
	al precio final se le agrega un 10% de recargo*/

	var cantidadProductos = prompt("Ingrese cantidad de productos comprados");
	var importeTotal = prompt("Ingrese importe TOTAL de la compra");
	var formaDePago = prompt("Ingrese el metodo de pago (en minusculas: tarjeta u cualquier otro)");
	var importeConSinDescuentos=importeTotal;

	if (cantidadProductos>2)
	{
		importeConSinDescuentos=parseInt(importeTotal)*0.9;
	
		if (importeTotal>2000)
		{
			importeConSinDescuentos=importeConSinDescuentos*.85;
		}

	}

	if (formaDePago=="tarjeta")
	{
		importeConSinDescuentos=importeConSinDescuentos*1.1;
	}

	alert("El importe total es de: "+importeConSinDescuentos);
	
}
