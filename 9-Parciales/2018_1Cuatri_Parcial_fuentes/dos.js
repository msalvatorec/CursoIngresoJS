function mostrar()
{	/*
	elNombre
	laLocalidad
	alert("usted es "+xxxxx+" y vive en la localidad de "+xxxxxxxx");*/

	/*alert("el precio del producto en efectivo es :$ xxxx , 
	con tarjeta tiene un recargo del 10% que seria $xx de recargo, 
	costandole final $xxx ")*/
	var precioProducto	= document.getElementById("elNombre").value;
	/*var tipoPago = document.getElementById("laLocalidad").value;*/

	var precioAumento = parseInt(precioProducto)*0.1;
	var precioConAumento = parseInt(precioProducto)*1.1;


	alert("el precio del producto en efectivo es: $"+precioProducto+"con tarjeta tiene un recargo del 10% que seria $"+precioAumento+"de recargo costandole final "+precioConAumento);

}
