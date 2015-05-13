function listafpm() {

	
	$('#listafpm').empty();	

		$.ajax({
					url: 'http://mc.creatactil.com/listafpm.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		     
						$.each(data, function(index, item) {
			
			     				var clave2 = item.clave;
								var curso2 = item.curso;					
								$('#listafpm').append(			
			'<li class="ui-first-child">'+
			'<a href="#page3" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="ponercurso(\''+clave2+'\',\''+curso2+'\')" >'+
			'<h4>'+item.curso+'</h4>'+
			'</a>'+
			'</li>'
			
								)
						});
		
		
					}
		
		});
}