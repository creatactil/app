function listacentros2(data) {
				
    		$('#listacentros2').empty();
              
			 var xcodigo_com = data;                            
			$.mobile.changePage($('#centros'), {transition : "slide"});
			
			$.ajax({
		url: 'http://mc.creatactil.com/php/listacentros2.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {codigo_com: xcodigo_com},
		success: function(data){			
	   	 
		
	    $.each(data, function(index, item) {
			
			     
			var codigo = item.codigo;
			
			
			$('#listacentros2').append(			
			'<li class="ui-first-child ui-last-child" style="height: 65px"><a href="#" class="ui-btn" onclick="changePage2(' + codigo + ');" >'+
			
       	'<h3 style="margin-top: -0.5em; height: 20px">'+ 'Codigo: '+''+item.codigo+'</h3>'+
		'<p  style="margin-top: -.6em; margin-bottom: -.6em;">'+
		'<strong>'+'Centro: '+''+item.cod_etapa +''+" " +''+item.denominacion+
    	'</strong><br>'+'Telefono: '+''+item.telefono+'</p>'+
		
        '</a>'+
    	'</li>'
		
			
		);					
			
			
			 $('body').append(content).trigger('refresh');
			$(index).page();
		});
			 
		}
		
		});
	
    }  

 
function changePage2(codigo) {
		
		var codigo = codigo;
		$.mobile.changePage($('#page3'), {transition : "slide"});
		$("#codigo").val(codigo);
	}

