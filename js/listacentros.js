function listacentros(data) {
				
    		$('#listacentros').empty();
              
			 var xcodigo_mun = data;                            
			
			
			$.ajax({
		url: 'http://mc.creatactil.com/listacentros.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {codigo_mun: xcodigo_mun},
		success: function(data){			
	   	 
		
	    $.each(data, function(index, item) {
			
			     
			var codigo = item.codigo;
			
			$('#listacentros').append(			
			'<li class="ui-first-child ui-last-child" style="height: 65px"><a href="#" class="ui-btn" onclick="changePage2(' + codigo + ');" >'+
			
       	'<h3 style="margin-top: -0.2em">'+ 'Codigo: '+''+item.codigo+'</h3>'+
		'<p class="ui-li-desc" style="margin-top: -0.6em">'+
		'<strong>'+'Centro: '+''+item.cod_etapa +''+" " +''+item.denominacion+
    	'</strong><br>'+'Telefono: '+''+item.telefono+'</p>'+
		
        '</a>'+
    	'</li>'
		
			
		);					
			
	/*		$('#listacentros').append(			
			'<li class="ui-btn ui-btn-icon-right ui-li ui-li-has-alt ui-btn-up-b">'+
			'<div class="ui-btn-inner ui-li ui-li-has-alt" aria-hidden="true">'+
			'<div class="ui-btn-text">'+
			'<a class="ui-link-inherit" href="" onclick="changePage2(' + codigo + ');">'+
						
			'<h3 class="ui-li-heading" >'+ 'Codigo: '+''+item.codigo+'</h3>'+
            '<p   style="margin-top:2px">'+item.cod_etapa +''+" " +''+item.denominacion+'</p>'+
            		
			'</a></div></div>'+
			'</li>'
			
						
			);*/
										
		 //Pagina dinamica  
		    content = '<div data-role="page"  id="id_' + index + '" data-url="id_' + index + '" data-theme="b" data-add-back-btn="true" data-back-btn-text="Atr&aacute;s">' +
					'<div data-role="header">' +
					'<h1>'+item.cod_etapa +''+" " +'' + item.denominacion + '</h1>' +
					'</div>' +
					'<div data-role="content" id="contenido" data-theme="c">' +
					'<p>' +
                    '<div data-role="fieldcontain" class="result">' +
                                  '<label>Codigo: '+item.codigo+'</label>'+
                                  '<br>'+
                                  '<label>Descripción: '+item.descripcion+'</label>'+
                                  '<br>'+
								  '<label>Direccion: '+item.direccion+'</label>'+
                                  '<br>'+
                                 '<label>Localidad: '+item.localidad+'</label>'+
                                  '<br>'+
								  '<label>Codigo postal: '+item.cod_postal+'</label>'+
                                  '<br>'+
								  '<label>Municipio: '+item.municipio+'</label>'+
                                  '<br>'+
								  '<label>Isla: '+item.isla+'</label>'+
                                  '<br>'+
								  '<label>Provincia: '+item.provincia+'</label>'+
                                  '<br>'+
								  '<label>Telefono: '+item.telefono+'</label>'+
                                  '<br>'+
								  '<label>Fax: '+item.fax+'</label>'+
                                  '<br>'+
								  '<label>Email: '+item.email+'</label>'+
                                  '<br>'+
								  '<label>Web: '+item.web+'</label>'+
                                  '<br>'+
                                  '</div>' +
                                '</p>' +
								'</div>';
	  

			
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

