function mostrarDatos(){
	var vnombre = localStorage.nombre_familiar;
	var vtelefono = localStorage.telefono;
	var vdni = localStorage.dni;
	var vcorreo = localStorage.correo;
	var vparentesco = localStorage.parentesco;
	
		if (vparentesco == "MAESTRO/PROFESOR"){
	
	$.mobile.changePage("#page3b", {transition: "slide"},
            true,
            true);
	
	
	
	
		}else{
			$.mobile.changePage("#page2", {transition: "slide"},
            true,
            true);
		
		$("#nombre_familiar").val(localStorage.nombre_familiar);
		$("#telefono").val(localStorage.telefono);
		$("#pa1").val("");
		$("#correo").val(localStorage.correo);
		
			
			
			}
		
		
	
	}

