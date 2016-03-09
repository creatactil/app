//var xusuario = "";
//var xusuario2 = "";
//var xpa2 = "";

function loginVal2(){
		
		var xusuario = $("#usuario").val();
		var xpa2 = $("#pa2").val().toUpperCase();	
		var xregid = $("#regId").val();
		
		
		if(document.form2.usuario.value.length == ""){
			alert("Introduzca su correo electrónico"); 
			document.form2.usuario.focus();
			return false;
			
		}else if(document.form2.pa2.value.length ==  ""){
			alert("Escriba contraseña ");
			document.form2.pa2.focus();
			return false;
						
		}else
	
	$.ajax({
		url: 'http://mc.creatactil.com/login2.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 10000,
		data: {usuario: xusuario, pa2: xpa2},
		error: function() {
       	 navigator.notification.alert("Ha surgido un error.\nPor favor compruebe su conexión a internet o el correo y la contraseña.");
		 $.mobile.changePage("#page0");
   		},
		success: function(data, response){

			if (response == 'success'){
    
			$.each(data, function(i,item){
		
				var xusuario2 = item.correo;
				var xnombrefam = item.nombre_familiar;
				var xmovilfam = item.movil;
				var xdnifam = item.dni;
				var xelcorreofam = item.correo;
				var xparentescofam = item.parentesco;
				var ncodigo = item.codigo;
				var xpass = item.pass;
				
				
				
				localStorage.nombre_familiar = xnombrefam;
				localStorage.telefono = xmovilfam;
				localStorage.dni = xdnifam;
				localStorage.correo = xelcorreofam;
				localStorage.parentesco = xparentescofam;
				localStorage.codigo = item.codigo;
				localStorage.pass = xpass;
				localStorage.gcm = xregid;
				
				//location.href="#pagina1";
				$.mobile.changePage("#page1");
				
				comprobarid();
				init();
				
			});
			
			}
		},

});

}

function comprobarid(){
	
	var xregid = $("#regId").val();
	var xdni = localStorage.dni;
	
		alert("Dentro comprobar");
		
	$.ajax({
		url: 'http://mc.creatactil.com/comprobarid.php',
		dataType: 'jsonp',
		jsonp: 'jsoncallback',
		timeout: 5000,
		
		data: {regid: xregid, dni: xdni},
		
			});
	
	
	}