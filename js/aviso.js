function Aviso() {
				
    		                                        
			var xcial = $("#cial").val().toUpperCase();
			var xnombre = localStorage.nombre_familiar;
			var xdni = localStorage.dni;
			
		$.ajax({
		url: 'http://mc.creatactil.com/aviso.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {cial: xcial, nombre: xnombre, dni: xdni},
		
			});
			
	
}