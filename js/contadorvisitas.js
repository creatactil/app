function contadorvisitas() {
	
		$.mobile.changePage("#page13", {transition: "slide"},
            true,
            true);
		
		
			$.ajax({
		type: "GET",
		url: 'http://mc.creatactil.com/recibecuenta.php',
		dataType: "text",
		data: {},
		success: dato
					});
	
		
	function dato(data){
			var conta1 = data;
			$("#celda").text(' '+conta1);
			
			}

    } 
	