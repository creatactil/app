function listaweb(data) {
			
	
			var xdni = localStorage.dni;
				
			$.mobile.changePage("#page6", {transition: "slide"},
            true,
            true);
				
    		$('#listaweb').empty();
           
			$("#carga35").show();
			
			$.ajax({
		url: 'http://mc.creatactil.com/listaweb.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {dni: xdni},
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
			
		
			
			
										
			$('#listaweb').append(			
			
			'<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="abrirweb(\''+item.web+'\')" style="height: 65px">'+
			'<img src="http://mc.creatactil.com/logo/'+item.codigo+'.jpg" class="ui-li-thumb" style="margin-top: 0.2em; margin-left: 0.2em">'+
			'<h3 style="margin-top: 0em; margin-left: -1.4em ">'+item.denominacion+'</h3>'+
			'<p style="margin-left: -1.8em">'+ 'Código del Centro: '+''+item.codigo+'<br>'+
			''+ 'Web: '+''+item.web+'</p>'+				
			'</a>'+
			'</li>'+
			
			'<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="abrirweb(\''+item.facebook+'\')" style="height: 65px">'+
			'<img src="http://mc.creatactil.com/logo/facebook.jpg" class="ui-li-thumb" style="margin-top: 0.2em; margin-left: 0.2em">'+
			'<h3 style="margin-top: 0em; margin-left: -1.4em ">'+item.denominacion+'</h3>'+
			'<p style="margin-left: -1.8em">'+ 'Código del Centro: '+''+item.codigo+'<br>'+
			''+ 'Web: '+''+item.facebook+'</p>'+				
			'</a>'+
			'</li>'+
			
			'<li class="ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn ui-btn-icon-right ui-icon-carat-r" onclick="abrirweb(\''+item.twitter+'\')" style="height: 65px">'+
			'<img src="http://mc.creatactil.com/logo/twitter.jpg" class="ui-li-thumb" style="margin-top: 0.2em; margin-left: 0.2em">'+
			'<h3 style="margin-top: 0em; margin-left: -1.4em ">'+item.denominacion+'</h3>'+
			'<p style="margin-left: -1.8em">'+ 'Código del Centro: '+''+item.codigo+'<br>'+
			''+ 'Web: '+''+item.twitter+'</p>'+				
			'</a>'+
			'</li>'
			
			);
			
			
			$("#carga35").hide();
										
		 /*Pagina dinamica
		    content = '<div data-role="page"  id="id_' + index + '" data-url="id_' + index + '" data-theme="a">' +
					'<div data-role="header">' +
					'<h1>' + item.titulo + '</h1>' +
					'</div>' +
					'<div data-role="content" id="contenido">' +
					'<p>' +
                    '<div data-role="fieldcontain" class="result">' +
                                  '<label>Nº de Registro: '+item.registro+'</label>'+
                                  '<br>'+
                                  '<label>Nombre del Centro: '+item.nombre_centro+'</label>'+
                                  '<br>'+
                                  '<p>CIRCULAR: ' + item.texto + '</p>' +
                                  '</div>' +
                                '</p>' +
								'</div>';
	    */

			
			 
		});
			 //$('body').append(content).trigger('refresh');
			//$(index).page();
			
		}
		
		});
	
    }  

 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}

function abrirweb(ruta){
	
	var xruta = ruta;
	
	window.open(xruta,'_blank','location=no','closebuttoncaption=Return');
	
	}