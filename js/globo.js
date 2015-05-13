function globo(){

  
  var conta1 = "0";  
  var xdni3 = localStorage.dni;
			
	$.ajax({
		type: "GET",
		url: 'http://mc.creatactil.com/containicio.php',
		dataType: "text",
		data: {dni: xdni3},
		success:  function(data){
						  
						  var carpeta = "http://mc.creatactil.com/imgportada/"
						 
							
							var conta1 = data;
							
						
							if(conta1 <= 5){	
									
							$(".globo").attr("src", carpeta.concat(conta1+".png"));
							}else{
							$(".globo").attr("src", carpeta.concat("5mas.png"));
							}
				
						  
						 }//fin function
		}); //fin ajax
		
		

		
}// fin globo		

