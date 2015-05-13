function modificasonido(){
	
	var xdni3 = localStorage.dni;
			
	$.ajax({
		type: "GET",
		url: 'http://mc.creatactil.com/modificasonido.php',
		dataType: "text",
		data: {dni: xdni3}
					});
	
		
	
	
	}// JavaScript Document