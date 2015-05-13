function mostrarDatos(){
	
	$.mobile.changePage("#page2", {transition: "slide"},
            true,
            true);
	
	var vnombre = localStorage.nombre_familiar;
	var vtelefono = localStorage.telefono;
	var vdni = localStorage.dni;
	var vcorreo = localStorage.correo;
	var vparentesco = localStorage.parentesco;
	
	$("#nombre_familiar").val(vnombre);
	$("#telefono").val(vtelefono);
	$("#pa1").val("");
	$("#correo").val(vcorreo);
	$("#parentesco").val(vparentesco);
	
	$('#parentesco').selectmenu('refresh', true);
	
	
	
	}

