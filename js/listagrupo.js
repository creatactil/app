function listagrupo() {

	$.mobile.changePage("#page16");
	$('#listagrupo').empty();	

		$.ajax({
					url: 'http://mc.creatactil.com/listagrupo.php',
					dataType: 'jsonp',
					jsonp: 'jsoncallback',
					timeout: 5000,
					data: {},
					success: function(data){			
	   	 
		     
						$.each(data, function(index, item) {
								
								
			     									
								$('#listagrupo').append(			
									
			'<li class="ui-first-child">'+
			'<a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="Ponegrupo(\''+item.clave+'\')" >'+
			'<h3>'+item.grupo+'</h3>'+
			'</a>'+
			'</li>'
						
			
								)
						});
		
		
					}
		
		});
}