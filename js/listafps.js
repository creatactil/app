function listafps() {

	
	$('#listafps').empty();	

		$.ajax({
					url: 'http://mc.creatactil.com/listafps.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		     
						$.each(data, function(index, item) {
			
			     					var clave3 = item.clave;
									var curso3 = item.curso;				
								$('#listafps').append(			
			'<li class="ui-first-child">'+
			'<a href="#page3" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="ponercurso(\''+clave3+'\',\''+curso3+'\')" >'+
			'<h4>'+item.curso+'</h4>'+
			'</a>'+
			'</li>'
			
								)
						});
		
		
					}
		
		});
}