function registrarFamiliar() {

               
				
				var xnombre = $("#nombre_familiar").val().toUpperCase();
    		  	var xtelefono = $("#telefono").val();
				var xcorreo = $("#correo").val();
				var xpa1 = $("#pa1").val();
				var xparentesco = $("#parentesco").val();
				var xregid = $("#regId").val();
				
				
				
				var xdni = xtelefono+xnombre.substring(0, 3);
				
		
				//var xdni = $("#dni").val().toUpperCase();
		
		
		if(document.formulario1.nombre_familiar.value.length == ""){
		alert("Escriba su nombre y apellido");
		document.formulario1.nombre_familiar.focus();
		return false;
		
		}else if(document.formulario1.telefono.value.length ==  ""){
		alert("Escriba su número movil ");
		document.formulario1.telefono.focus();
		return false;
		
		}else if(document.formulario1.parentesco.value.length == ""){
		alert("Elija su parentesco");
		document.formulario1.parentesco.focus();
		return false;
		
		}else if(document.formulario1.correo.value.length == ""){
		alert("Escriba su correo");
		document.formulario1.correo.focus();
		return false;
		
		}else if(document.formulario1.pa1.value.length == ""){
		alert("Escriba su contraseña");
		document.formulario1.pa1.focus();
		return false;
		
		
		}else		
			
			
			var r=confirm("Confirmar que ha leido, dar el consentimiento y acepta Ley de Protección de Datos y condiciones de uso")
			
			if (r==true){
			
           $.ajax({
           type: "POST",
           url: "http://www.creatactil.com/push/registrofam.php",
           data: ({nombre_familiar: xnombre, telefono: xtelefono,  dni: xdni, correo: xcorreo, parentesco: xparentesco, regid: xregid, pa1: xpa1}),
                      cache: false,
                      dataType: "text",
                      //success: onSuccess
					  
					  
					  
                    });
        	
			
            function onSuccess(data)
            {
            
    		//alert(data);
            }
			
		localStorage.nombre_familiar = xnombre;
		localStorage.telefono = xtelefono;
		localStorage.dni = xdni;
		localStorage.regId = xregid;
		localStorage.parentesco = xparentesco;
		
		
		
		$.mobile.changePage("#page3");
		
		}else
		
		$.mobile.changePage("#page1");
  }