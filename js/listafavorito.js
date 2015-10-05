function listafavorito() {
				
 
		var xdni = localStorage.dni;
		
		$.mobile.changePage("#page14", {transition: "slide"},
            true,
            true);
	
			
			$('#page14 ul').empty();
            $("#carga14").show();
		                 
						
		$.ajax({
		url: 'http://mc.creatactil.com/listafavorito.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {dni: xdni},
		success: function(data){			
	   	 
		     
	    $.each(data, function(index, item) {
			
			var registro = item.registro;
            var codigo = item.codigo;
			var estado = item.estado;
			var id_aux = item.id_aux;
			var cial = item.cial;
			
			var vino = "#ae5b66";
			
			if(estado==0){
				var tema = "c";
				var listo2 = "#listafav";
				
				}else{	
				var tema = "c";
				var listo2 = "#listafav1";}
									
			$(listo2).append(
						
			'<li class="ui-li-has-alt ui-li-has-thumb ui-first-child ui-last-child"><a href="#" class="ui-btn" onclick="changePage(id' + index + '), contador(\''+registro+'\');" style="height: 65px">'+
			'<img src="http://mc.creatactil.com/logo/'+item.codigo+'.jpg" class="ui-li-thumb" style="margin-top: 0.2em; margin-left: 0.2em">'+
       	'<h3 style="margin-top: 0em; margin-left: -1.4em">'+item.titulo+'</h3>'+
    	'<p style="color:'+vino+'; margin-left: -1.8em "><strong>'+'Alumno:  '+item.nombre_alumno+'</strong><br>'+
		''+'Centro: '+''+item.nombre_centro+'<br>'+
    	''+'Fecha: '+''+item.fecha+'</p>'+
		'<a data-icon="delete" class="ui-btn ui-btn-icon-notext ui-icon-delete" title=""></a>'+
        '<a href="#" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-a" title="" onClick="borrafavorito(\''+item.id_aux+'\' )">'+
		'</a>'+
    	'</li>'
						
			
			);
			
			
			
			
			
										
		 /*Pagina dinamica*/
		    content = 
			'<div data-role="page"  id="id' + index + '" data-url="id' + index + '" data-theme="a" >' +
					'<div style="height:20px; visibility:hidden"> </div>'+
					'<div data-role="header" data-theme="b">' + 
					'<a href="" onClick="listafavorito()" data-role="button" data-icon="carat-l" data-iconpos="notext" data-theme="a" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" role="button"><span class="ui-btn-inner ui-corner-bottom ui-controlgroup-last" aria-hidden="true"><span class="ui-btn-text">Atrás</span><span class="ui-icon ui-icon-back ui-icon-shadow"></span></span></a>'+
					'<h1>' + item.titulo + '</h1>' +
					'</div>' +
					
					
									
					
					'<div data-role="content" id="contenido14">' +
					'<p>' +
                    '<div data-role="fieldcontain" class="result2">' +
                                  '<p style="margin:0; padding:0; color:#ae5b66; font-size: 0.7em">Nº de Registro: '+item.registro+'<br>'+
                                  ''+item.nombre_centro+'<br>'+
								  'Fecha: '+item.fecha+'</p>'+
								  '<p><strong>CIRCULAR:</strong>'+
								  '<p>'+ item.texto + '</p>' +
								  '<p><strong>'+item.nombre+'</strong></p>'+
								  '<br>'+
                                  '<a href="" onclick="descargarArchivo(\''+item.enlace+'\')" >'+item.enlace+'</a>'+
								  '<br>'+
								  '<br>'+
								  '<br>'+
								  '<a href="#page11" style="color:#900"  data-rel="dialog" onClick="textofirma(\''+item.registro+'\' ), textofirma3(\''+item.cial+'\' ), textofirma4(\''+item.codigo+'\' ) ">'+item.firma+'</a>'+
								   
                                  '</div>' +
                                '</p>' +
								'</div>';
	   
			
			 $('body').append(content).trigger('refresh');
			$(index).page();
			
			
		});
			$("#carga14").hide(); 
			
		}
		
		});
			$('#piepagina14').append('<div data-role="footer" data-theme="b" data-position="fixed" style="background:#ccc" role="contentinfo" class="ui-footer ui-bar-b ui-footer-fixed slideup ui-fixed-hidden">'+
    '<div data-role="navbar" class="ui-navbar" role="navigation">'+
    '<ul class="ui-grid-c">'+
    '<li class="ui-block-a"><a href="#page1" data-role="button" onclick="globo()" data-icon="home" class="ui-link ui-btn ui-icon-home ui-btn-icon-top ui-shadow ui-corner-all" role="button">Inicio</a></li>'+
    '<li class="ui-block-b"><a href="#" data-role="button" onclick="lasesion()" data-icon="mail" class="ui-link ui-btn ui-icon-mail ui-btn-icon-top ui-shadow ui-corner-all" role="button"><img src="" class="globo" style="float:left; width:15px;">Circulares</a></li>'+
    '<li class="ui-block-c"><a href="#" data-role="button" onclick="listafavorito()" data-icon="star" class="ui-link ui-btn ui-icon-star ui-btn-icon-top ui-shadow ui-corner-all" role="button">Favoritos</a></li>'+
    '<li class="ui-block-d"><a href="#page6" data-role="button" onclick="listaweb()" data-icon="navigation" class="ui-link ui-btn ui-icon-navigation ui-btn-icon-top ui-shadow ui-corner-all" role="button">Web</a></li>'+
    '</ul>'+
	'</div>'
									);
	
			
		  	$('#listafav').listview('refresh', true);
			$('#listafav1').listview('refresh', true);
			globo();
    } 
	 



 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}
	
	
function borrar2(id_aux2){
	
	var elidaux2 = id_aux2; 
	$("#id_aux4").val(elidaux2);	
	
	}
	
//Camabia el estado del mensaje de no leido a leido
function modificaEstado(registro){
	
	var registro2 = registro;
	var xdni2 = localStorage.dni;
	var xparentesco = localStorage.parentesco;
	
	$.ajax({
		url: 'http://mc.creatactil.com/modificaestado.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {dni: xdni2, registro: registro2, parentesco: xparentesco},
		success: function(data){}
		
		});
		globo();
	}
	
//Añade al contador de mensaje
function contador(registro){
	
	var registro3 = registro;
	var xdni3 = localStorage.dni;
	
	
	$.ajax({
		url: 'http://mc.creatactil.com/contador.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {dni: xdni3, registro: registro3},
		success: function(data){}
		
		});
	modificaEstado(registro3);
	}
	

function textofirma(registro){
	
	$("#registrofirma").text(registro);

	}
	
/*function textofirma2(dni){
	
	$("#dnifirma").text(dni);
	
	}*/
	
function textofirma3(cial){
	
	$("#cialfirma").text(cial);

	}
	
function textofirma4(codigo){
	
	$("#codigofirma").text(codigo);

	}
	
	