function mostrar()
{
	var notaAlumno;
	var sexoAlumno;
	var sumadorNotasAlumnos=0;
	var notaMimina=11;
	var sexoNotaMinima;
	var cantidadVaronesNotaMayorIgualCinco=0;

	for (i=1;i<6;i++)
	{
		//Pide nota del Alumno y válida que sea un número y que ese número este entre 1 y 10
		notaAlumno = prompt("Por favor ingrese nota del Alumno");
		notaAlumno = parseInt(notaAlumno);
		while (isNaN(notaAlumno) || notaAlumno<0 || notaAlumno>10)
		{
			notaAlumno = prompt("La nota ingresada no es válida. Por favor ingrese nota del Alumno (Valores entre 1 y 10 inclusives)");
			notaAlumno = parseInt(notaAlumno);
		}

		//Pide el sexo del alumno y valida que sea masculino (m) o femenino (f)
		sexoAlumno = prompt("Por favor ingrese sexo del Alumno; 0 si es mujer y 1 si es hombre");
		while ( sexoAlumno!="f" && sexoAlumno!="m"  )
		{
			sexoAlumno = prompt("Dato erroneo. Por favor ingrese sexo del Alumno (0 si es mujer y 1 si es hombre)");
		}

		sumadorNotasAlumnos=sumadorNotasAlumnos+notaAlumno;

		//Busca nota minima
		if (notaMimina>notaAlumno)
		{
			notaMimina=notaAlumno;
			sexoNotaMinima=sexoAlumno;
		}


		//Cuenta varones que tienen la nota >= 5
		if (sexoAlumno=="m" && notaAlumno>=5)
		{
			cantidadVaronesNotaMayorIgualCinco++;
		}


	}

	var promedioNotasAlumnos = sumadorNotasAlumnos/5;
	alert("Promedio de las notas: "+promedioNotasAlumnos);
	alert("La nota más baja es: "+notaMimina+" y el sexo del alumno es: "+sexoNotaMinima);
	alert("La cantidad de varones con nota mayor o igual a 5 es de: "+cantidadVaronesNotaMayorIgualCinco);

}
