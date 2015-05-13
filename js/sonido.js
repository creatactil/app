function sonido(){
	
	var xdni3 = localStorage.dni;
			
	$.ajax({
		type: "GET",
		url: 'http://mc.creatactil.com/sonido.php',
		dataType: "text",
		data: {dni: xdni3},
		success: tono
					});
	
		
	function tono(data){
			
			var i = data;
			
			
			if(i>0){
						
			alert("Tienes circular nueva");
					
			}
			}
   
     setTimeout("sonido()", 60000);
	
	}