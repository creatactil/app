function registrarAlumno() {
				
				
								                  
			    var xcial = $("#cial").val().toUpperCase();
				var xnombreAlu = $("#nombre_alumno").val().toUpperCase();
    		  	
				var apellidos = $("#apellidos").val().toUpperCase();
				var xapellidos = $.trim( apellidos );
				
				var xcodigo = $("#codigo").val();
    			var xanio = 2014;
				var xcurso = $("#boxcurso").val();
				var xgrupo  = $("#boxgrupo").val();
				var xactividad = $("#actividad").val();
				var xcomedor = $("#comedor").val();
				var xtransporte = $("#transporte").val();
				var xampa = $("#ampa").val();
				
				var xdni = localStorage.dni;
				var xnombrefam = localStorage.nombre_familiar;
				
					
		if(document.formulario2.cial.value.length ==  ""){
		alert("Escriba el cial ");
		document.formulario2.cial.focus();
		return false;
						
		}else if(document.formulario2.nombre_alumno.value.length == ""){
		alert("Escriba el nombre");
		document.formulario2.nombre_alumno.focus();
		return false;
		
		}else if(document.formulario2.apellidos.value.length ==  ""){
		alert("Escriba los apellidos ");
		document.formulario2.apellidos.focus();
		return false;
		
		}else if(document.formulario2.codigo.value.length == ""){
		alert("Escriba el codigo del centro ");
		document.formulario2.codigo.focus();
		return false;
		
		}else if(document.formulario2.boxcurso.value.length == ""){
		alert("Seleccione el curso ");
		document.formulario2.curso.focus();
		return false;
		
		}else if(document.formulario2.boxgrupo.value.length == ""){
		alert("Seleccione el grupo ");
		document.formulario2.grupo.focus();
		return false;
		
		
		}else		
			
			
			localStorage.cial = document.formulario2.cial.value;	
			localStorage.codigo = document.formulario2.codigo.value;
				
           $.ajax({
           type: "POST",
           url: "http://mc.creatactil.com/registroalu.php",
           data: ({nombre_alumno: xnombreAlu, apellidos: xapellidos,  cial: xcial, codigo: xcodigo, anio: xanio, curso: xcurso, grupo: xgrupo, actividad: xactividad, comedor: xcomedor, transporte: xtransporte, dni_familiar: xdni, ampa: xampa, nombrefam: xnombrefam }),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
        

           

            function onSuccess(data)
            {
             
			Aviso(); 
			globo();
    		alert(data);
			$("#lnkDialog").click();
			//$.mobile.changePage("#page12");
			portada()
            }
		
		
  }
  