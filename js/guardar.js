function validarDni(){
	
	var letrasdni = "TRWAGMYFPDXBNJZSQVHLCKE";
	var xdni = document.formulario1.dni.value;
	var letradni = xdni.charAt(8);
	var mayusletra = letradni.toUpperCase();
	var num_dni = xdni.substring(0, 8);
	var letra = letrasdni.charAt(num_dni % 23);
	var pagina = "";
		
		if(mayusletra != letra){
			error();
			var pagina = "#page2";
			}else{
				guardar();
				var pagina = "#page3";
				}
		document.links["link"].href = pagina;
		
		  


}


function guardar(){
	localStorage.nombre_familiar = document.formulario1.nombre_familiar.value;
	localStorage.telefono = document.formulario1.telefono.value;
	localStorage.dni = document.formulario1.dni.value;
	localStorage.parentesco = document.formulario1.parentesco.value;
	
	mostrar();
	
	}
	
function mostrar(){
	var vnombre = localStorage.nombre_familiar;
	var vtelefono = localStorage.telefono;
	var vdni = localStorage.dni;
	var vparentesco = localStorage.parentesco;
	
	$("#nombre_familiar").val(vnombre);
	$("#telefono").val(vtelefono);
	$("#dni").val(vdni);
	$("#parentesco").val(vparentesco);
	
	}

function error(){
	alert("Dni erroneo");
	}
	
