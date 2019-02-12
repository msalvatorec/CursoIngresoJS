function mostrar()
{

var laEdad;
laEdad	= parseInt(document.getElementById("edad").value);

if (laEdad>17)
{
	alert("Es mayor de edad");
}

if (laEdad>12 && laEdad	<18)
{
	alert("Es un adolescente");
}

if (laEdad<13)
{
	alert("Es un niño");
}



}//FIN DE LA FUNCIÓN