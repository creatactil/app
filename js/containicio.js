function containicio(){
	
	
	var xdni3 = localStorage.dni;
	
	
	$.ajax({
		url: 'http://mc.creatactil.com/containicio.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {dni: xdni3},
		success: dato
			
		});
	
	
	}
	
	function dato(data){
			
			alert(data);
			}