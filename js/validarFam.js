function validarFam(formulario1){
	
				var letrasdni = "TRWAGMYFPDXBNJZSQVHLCKE";
				var xdni = document.formulario1.dni.value;
				var letradni = xdni.charAt(8);
				var mayusletra = letradni.toUpperCase();
				var num_dni = xdni.substring(0, 8);
				var letra = letrasdni.charAt(num_dni % 23);
	
	if(document.formulario1.nombre_familiar.value.length == ""){
		alert("Escriba su nombre y apellido");
		document.formulario1.nombre_familiar.focus();
		return false;
		}else if(document.formulario1.telefono.value.length ==  ""){
		alert("Escriba su número movil ");
		document.formulario1.telefono.focus();
		return false;
		
		}else if(document.formulario1.dni.value.length == ""){
		alert("Escriba su número dni ");
		document.formulario1.dni.focus();
		return false;
		
		}else if(mayusletra != letra){
		alert("Dni erroneo ");
		document.formulario1.dni.focus();
		return false;	
		
		}else if(document.formulario1.parentesco.value.length == ""){
		alert("Seleccione su parentesco");
		document.formulario1.parentesco.focus();
		return false;
		
		
		}else{
			alert("Datos enviados");
			return true
			}

	}