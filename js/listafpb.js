function listafpb() {

	$.mobile.changePage("#page15");
	$('#listafpb').empty();	

		$.ajax({
					url: 'http://mc.creatactil.com/listafpb.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		      $.each(data, function(index, item) {
			
			     
			var clave = item.clave;
			var curso = item.curso;
			$('#listafpb').append(			
			
			'<li class="ui-first-child">'+
			'<a href="#page3" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="ponercurso(\''+clave+'\',\''+curso+'\')" >'+
			'<h4>'+item.curso+'</h4>'+
			'</a>'+
			'</li>'
		
		
			
		);					
			
		
			
		});
			 
		}
		
		});
	
    }  





			