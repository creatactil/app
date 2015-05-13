function validarDni2(){
	
	//var xdni = $("#dni").val().toUpperCase();
	var dni_guardado = localStorage.dni;
	
	var pagina = "";	
		
		if(typeof dni_guardado == 'undefined'){
		alert("Introduzca sus Datos Personales y presione Guardar");
			var pagina = "#page2";
			
		}else{
				
		var pagina = "#page3";
				
				}
		$.mobile.changePage(pagina, {transition: "slide"},
            true,
            true);
		
}


	
