function crearLista() {
				
    	var xdni = localStorage.dni;
		$.mobile.changePage("#page4", {transition: "slide"},
            true,
            true);
	
			
			$('#page4 ul').empty();
            $("#carga23").show();
		                 
						
		$.ajax({
		url: 'http://mc.creatactil.com/listamensajes.php',
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
				var tema = "#000000";
				var listo = "#lista";
				//color:#BCBCBC;
				}else{	
				var tema = "#686868";
				var listo = "#lista1";}
									
			$(listo).append(			
			'<li class="ui-li-has-alt ui-li-has-thumb ui-first-child ui-last-child" ><a href="#" class="ui-btn" onclick="changePage(id_' + index + '), contador(\''+registro+'\');" style="height: 65px">'+
			'<img src="http://mc.creatactil.com/logo/'+item.codigo+'.jpg" class="ui-li-thumb" style="margin-top: 0.2em; margin-left: 0.2em">'+
       	'<h3 style="color:'+tema+'; margin-top: 0em; margin-left: -1.4em">'+item.titulo+'</h3>'+
		'<p style="color:'+vino+'; margin-left: -1.8em "><strong>'+'Alumno:  '+item.nombre_alumno+'</strong><br>'+
    	''+'Centro:  '+item.nombre_centro+'<br>'+
    	''+'Fecha: '+''+item.fecha+'</p>'+
		'<a data-icon="delete" class="ui-btn ui-btn-icon-notext ui-icon-delete" title=""></a>'+
        
		
		'<a href="#" data-rel="popup" data-position-to="window" data-transition="pop" aria-haspopup="true" aria-owns="purchase" aria-expanded="false" class="ui-btn ui-btn-icon-notext ui-icon-delete ui-btn-a" title="" onClick="borrarMensaje(\''+item.id_aux+'\' )">'+
		'</a>'+
    	'</li>'
			
			
		);
			
						
										
		 /*Pagina dinamica*/
		    content = 
			'<div data-role="page"  id="id_' + index + '" data-url="id_' + index + '" data-theme="a" >' +
					'<div style="height:20px; visibility:hidden"></div>'+
					'<div data-role="header" data-theme="b">' + 
					'<a href="#page4" onClick="crearLista()" data-role="button" data-icon="carat-l" data-iconpos="notext" data-theme="a" class="ui-link ui-btn-left ui-btn ui-btn-a ui-icon-carat-l ui-btn-icon-notext ui-shadow ui-corner-all" role="button"><span class="ui-btn-inner ui-corner-bottom ui-controlgroup-last" aria-hidden="true"><span class="ui-btn-text">Atrás</span><span class="ui-icon ui-icon-back ui-icon-shadow"></span></span></a>'+
					'<h1>' + item.titulo + '</h1>' +
					
					'</div>' +
					
					
									
					
					'<div data-role="content" id="contenido" >' +
					'<p>' +
                    '<div data-role="fieldcontain" class="result" >' +
                    '<p style="margin:0; padding:0; color:#ae5b66; font-size: 0.7em ">Alumno: '+item.nombre_alumno+'<br>'+
					'Nº de Registro: '+item.registro+'<br>'+
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
								  '<a href="#page11" style="color:#900"  data-rel="dialog" onClick="textofirma(\''+item.registro+'\' ), textofirma3(\''+item.cial+'\' ), textofirma2(\''+item.nombre_alumno+'\' ), textofirma4(\''+item.codigo+'\' ) ">'+item.firma+'</a>'+
								   '<br>'+
								  '<br>'+
								  '<center>'+
								'<a id="favorito" data-role="button" data-icon="star" data-inline="true" onclick="favorito(\''+id_aux+'\');" data-theme="b">Añadir a Favorito</a>'+
								'</center>'+
                                  '</div>' +
								  
                                '</p>' +
							  	
		
	
								'</div>';
	   
			
			$('body').append(content).trigger('refresh');
			$(index).page();
			
			
		});
			$("#carga23").hide(); 
		}
		
		});
			
			$('#piepagina').append('<div data-role="footer" data-theme="b" data-position="fixed" style="background:#ccc" role="contentinfo" class="ui-footer ui-bar-b ui-footer-fixed slideup ui-fixed-hidden">'+
    '<div data-role="navbar" class="ui-navbar" role="navigation">'+
    '<ul class="ui-grid-c">'+
    '<li class="ui-block-a"><a href="#page1" data-transition="slide" data-role="button" onclick="globo()" data-icon="home" class="ui-link ui-btn ui-icon-home ui-btn-icon-top ui-shadow ui-corner-all" role="button">Inicio</a></li>'+
    '<li class="ui-block-b"><a href="#" data-role="button" onclick="crearLista()" data-icon="mail" class="ui-link ui-btn ui-icon-mail ui-btn-icon-top ui-shadow ui-corner-all" role="button"><img src="" class="globo" style="float:left; width:15px;">Circulares</a></li>'+
    '<li class="ui-block-c"><a href="#" data-role="button" onclick="listafavorito()" data-icon="star" class="ui-link ui-btn ui-icon-star ui-btn-icon-top ui-shadow ui-corner-all" role="button">Favoritos</a></li>'+
    '<li class="ui-block-d"><a href="#" data-role="button" onclick="listaweb()" data-icon="navigation" class="ui-link ui-btn ui-icon-navigation ui-btn-icon-top ui-shadow ui-corner-all" role="button">Web</a></li>'+
    '</ul>'+
	'</div>'
									);
	
			
		  	$('#lista').listview('refresh', true);
			$('#lista1').listview('refresh', true);
			globo();
			
    } 
	 



 
function changePage(id) {
		$.mobile.changePage($(id), {transition : "slide"});
		
	}
	
	
function borrar1(id_aux){
	
	var elidaux = id_aux; 
	$("#id_aux3").val(elidaux);	
	
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
	globo();
	}
	

function textofirma(registro){
	
	$("#registrofirma").text(registro);

	}
	
function textofirma2(nombre){

	$("#nombrefirma").text(nombre);
	
	}
	
function textofirma3(cial){
	
	$("#cialfirma").text(cial);

	}
	
function textofirma4(codigo){
	
	$("#codigofirma").text(codigo);

	}
	
	//DESCARGA DE ARCHIVO AL MOVIL FILE TRANSFER
function descargarArchivo(nombre){
	
	            
                var server = "http://www.creatactil.com/micolegio/web/files/"
                var filename = nombre;
                var uri = encodeURI(server + filename);
                


                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, onErrorCallback);

                function onFileSystemSuccess(fileSystem) {
                    
                    // alert("got filesystem");

                    fileSystem.root.getDirectory('miColegioApp',
                        { create:true },
                        transferFile,
                        onErrorCallback
                    );

                }                

                // console.log(uri);
                //alert("here");

                function transferFile(dir){
                    
                    // alert("got dir");
                    console.log(dir.toURL());
                    console.log(uri);
					
					abrirfichero(uri);   //modificacion por path  
					
                    path = dir.toURL() + '/' + filename;//AQUI ES EL CAMBIO de fullpath por toURL()
					
                    var fileTransfer = new FileTransfer();

                    fileTransfer.download(
                        uri,
                        path,
                        function(entry) {
                            console.log("download complete: " + entry.toURL());
                                                
                        },
                        function(error) {
                            console.log("download error source " + error.source);
                            console.log("download error target " + error.target);
                            console.log("upload error code " + error.code);
                        }
                    );
               
	

            }

            // a generic error callback function
            function onErrorCallback(error) {
                alert("Error!" + error.code);
                console.log(error);
            }
 

}

function abrirfichero(ruta3){
	
	console.log(ruta3);
	window.open (ruta3, '_blank', 'location=yes,closebuttoncaption=done,enableViewportScale=yes');
	
	
	}
