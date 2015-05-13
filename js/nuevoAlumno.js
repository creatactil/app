function nuevoAlumno(){
	
	$( ".guardaalumno" ).removeClass( "ui-disabled" );
	$("#nombre_alumno").val("");
	$("#cial").val("");
	$("#anio").val("");
	$("#curso").val("");
	$("#curso").selectmenu('refresh', true);
	$("#grupo").val("");
	$("#grupo").selectmenu('refresh', true);
	document.formulario2.cial.focus();
	}

