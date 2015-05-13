function validarCentro(){
	
			var xcodigo = $("#codigo").val();
					
			if (xcodigo == ""){
			alert("Introduzca el codigo del Centro"); 
			document.formulario2.codigo.focus();
			return false;			
			
			}else
	
	$.ajax({
		url: 'http://venasco.hol.es/educa/validarcentro.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		data: {codigo: xcodigo},
		success: function(data){
			
			alert(data);
									},
		
	});
	document.formulario2.codigo.focus();
	
}