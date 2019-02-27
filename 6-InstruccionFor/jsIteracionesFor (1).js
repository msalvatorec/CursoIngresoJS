function mostrar()
{
//Genera 10 numeros random y los muestra por la consola
var numeroAleatorio;
var contador1=0;
var contador2=0;
var contador3=0;
var contador4=0;
var contador5=0;
var contador6=0;
var contador7=0;
var contador8=0;
var contador9=0;
var contador10=0;

var limiteCiclo=1000;

for (i=0;i<limiteCiclo;i++)
	{		
		numeroAleatorio = Math.floor((Math.random() * 10) + 1);
		console.log(numeroAleatorio);

		switch(numeroAleatorio){
			case 1:
			contador1++;
			break;

			case 2:
			contador2++;
			break;

			case 3:
			contador3++;
			break;

			case 4:
			contador4++;
			break;

			case 5:
			contador5++;
			break;

			case 6:
			contador6++;
			break;

			case 7:
			var limitador7=contador7*100/i;
			if (limitador7>=6)
				{
					i--;
					continue;
				}
			else
				{
					contador7++;
				}
			break;

			case 8:
			contador8++;
			break;

			case 9:
			contador9++;
			break;

			case 10:
			contador10++;
			break;
		}

	}


	var sumaTotalNumerosSalidos=contador1+contador2+contador3+contador4+contador5+contador6+contador7+contador8+contador9+contador10;

	document.write("Contador del 1: "+contador1+" el porcentaje es: "+contador1*100/limiteCiclo+"%<br>");
	document.write("Contador del 2: "+contador2+" el porcentaje es: "+contador2*100/limiteCiclo+"%<br>");
	document.write("Contador del 3: "+contador3+" el porcentaje es: "+contador3*100/limiteCiclo+"%<br>");
	document.write("Contador del 4: "+contador4+" el porcentaje es: "+contador4*100/limiteCiclo+"%<br>");
	document.write("Contador del 5: "+contador5+" el porcentaje es: "+contador5*100/limiteCiclo+"%<br>");
	document.write("Contador del 6: "+contador6+" el porcentaje es: "+contador6*100/limiteCiclo+"%<br>");
	document.write("Contador del 7: "+contador7+" el porcentaje es: "+contador7*100/limiteCiclo+"%<br>");
	document.write("Contador del 8: "+contador8+" el porcentaje es: "+contador9*100/limiteCiclo+"%<br>");
	document.write("Contador del 9: "+contador9+" el porcentaje es: "+contador1*100/limiteCiclo+"%<br>");
	document.write("Contador del 10: "+contador10+" el porcentaje es: "+contador10*100/limiteCiclo+"%<br>");
	document.write("-----------------------------------------------<br>")
	document.write("Salieron: "+limiteCiclo+" numeros<br>");
	document.write("La suma de todos los contadores de numeros es: "+sumaTotalNumerosSalidos);






/*Ejercicio 1
var contador=0;	

for (; contador<10;)
	{		
		console.log(contador);	
		contador++;
		alert(contador);

	}
*/

}