function buscarAlumno(){
	
			var xcial = $("#cial").val().toUpperCase();
						
			if (xcial == ""){
			alert("Para Modificar datos: Introduzca el código del alumno, modifique los datos y presione Guardar"); 
			document.formulario2.cial.focus();
						
			
			}else
	
	$.ajax({
		url: 'http://mc.creatactil.com/buscarAlumno.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		data: {cial: xcial},
		success: function(data){
			
			$.each(data, function(i,item){
											
				$("#nombre_alumno").val(item.nombre_alumno);
				$("#apellidos").val(item.apellidos);
				$("#cial").val(item.cial);
				$("#codigo").val(item.codigo);
				$("#anio").val(item.anio);
				$("#boxcurso").val(item.curso);
				$("#boxgrupo").val(item.grupo);
				$("#comedor").val(item.comedor);
				$("#transporte").val(item.transporte);
				$("#actividad").val(item.actividad);
				$("#ampa").val(item.ampa)
				
				$('#boxcurso').selectmenu('refresh', true);
				$('#boxgrupo').selectmenu('refresh', true);
				$('#comedor').selectmenu('refresh', true);
				$('#transporte').selectmenu('refresh', true);
				$('#actividad').selectmenu('refresh', true);
				$('#ampa').selectmenu('refresh', true);
										});
									},
		
	});
	document.formulario2.nombre_alumno.focus();
		
}