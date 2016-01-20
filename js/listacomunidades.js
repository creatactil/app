function listacomunidades() {
				
    		$('#listacomunidades').empty();
              
			                          
			
			
			$.ajax({
		url: 'http://mc.creatactil.com/php/listacomunidades.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {},
		success: function(data){			
	   	 
		
	    $.each(data, function(index, item) {
			
			var codigo = item.id_comunidad;     
			var nombre = item.nombre;
			
	$('#listacomunidades').append(			
			'<li class="ui-first-child ui-last-child" style="height: 65px"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r"" onclick="listacentros2(' + codigo + ');" >'+
			
       	'<h3>'+ ''+''+item.nombre+'</h3>'+
			
        '</a>'+
    	'</li>'
		
			
		);					
	

			
			 $('body').append(content).trigger('refresh');
			$(index).page();
		});
			 
		}
		
		});
	
    }  

 
