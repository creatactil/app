 function registrarMaestro() {

               
				var xparentesco = "MAESTRO/PROFESOR";
				var xnombre = $("#nombre_profe").val().toUpperCase();
    		  	var xapellidos = $("#apellidos_profe").val().toUpperCase() ;
				var xtelefono = $("#telefono_profe").val();
				var xcorreo = $("#correo_profe").val();
				var xpa1 = $("#pa1_profe").val();
				var xcial = $("#cial_profe").val().toUpperCase();
				var xregid = $("#regId").val();
				
				
				var xdni = xtelefono+xnombre.substring(0, 1);
				
				
		if(xnombre == ""){
		alert("Escriba su nombre");
		$.mobile.changePage("#page3b");
		return false;
		
		}else if(xapellidos ==  ""){
		alert("Escriba sus apellidos");
		$.mobile.changePage("#page3b");
		return false;
		
		}else if(xtelefono ==  ""){
		alert("Escriba su número movil ");
		$.mobile.changePage("#page3b");
		return false;
		
			
		}else if(xcial == ""){
		alert("Escriba su código");
		$.mobile.changePage("#page3b");
		return false;
		
		}else if(xcorreo == ""){
		alert("Escriba su correo");
		$.mobile.changePage("#page3b");
		return false;
		
		}else if(xpa1 == ""){
		alert("Escriba su contraseña");
		$.mobile.changePage("#page3b");
		return false;
		
		
		}else		
			
			
			var r=confirm("Confirmar que ha leido, dar el consentimiento y acepta Ley de Protección de Datos y condiciones de uso")
			
			if (r==true){
			
           $.ajax({
           type: "GET",
           url: "http://mc.creatactil.com/registromaestro.php",
           data: ({nombre_profe: xnombre, apellidos_profe: xapellidos, telefono_profe: xtelefono,  dni_profe: xdni, correo_profe: xcorreo, parentesco: xparentesco, cial_profe: xcial, pa1: xpa1, regid: xregid }),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
					  
					  
					  
                    });
        	
			
            function onSuccess(data)
            {
            alert(data);
			if (data == "ERROR. Compruebe el Código."){
				$.mobile.changePage("#page3b");
			}else{
			
			localStorage.nombre_profe = xnombre;
			localStorage.apellidos_profe = xapellidos;
			localStorage.telefono_profe = xtelefono;
			localStorage.correo_profe = xcorreo;
			localStorage.dni = xdni;
			//localStorage.regId = xregid;
			localStorage.parentesco = xparentesco;
	
		
			$.mobile.changePage("#page1");
			globo()
				}
            }
			
		}
  }