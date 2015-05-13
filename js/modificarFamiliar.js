  function modificarFamiliar() {

            
			var xnombre = $("#nombre_familiar").val().toUpperCase();
    		var xtelefono = $("#telefono").val();
			var xdni = $("#dni").val().toUpperCase();
			var xparentesco = $("#parentesco").val();
			
			var xdni = $("#dni").val().toUpperCase();
			var dni_guardado = localStorage.dni;
                
				
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
		
		}else if(dni_guardado != xdni){
		alert("ERROR Usuario no registrado comprueba el dni");
		document.formulario1.dni.focus();
		return false;	
		
		}else if(document.formulario1.parentesco.value.length == ""){
		alert("Escriba parentesco ");
		document.formulario1.parentesco.focus();
		return false;
		
		}else		
				
				
           $.ajax({
           type: "POST",
           url: "http://venazco.hol.es/modificarFamiliar.php",
           data: ({nombre_familiar: xnombre, telefono: xtelefono, dni: xdni, parentesco: xparentesco }),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
                
  }

           

            function onSuccess(data)
            {
             
    		alert(data);
            }

   