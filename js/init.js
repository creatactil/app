function init(){
	
	var xdni = localStorage.dni;
	//alert(xdni);
	
	if ((typeof xdni == 'undefined') || (xdni == "")){
		
		$.mobile.changePage("#page0", {transition: "slide"},
            true,
            true);
		
		$("#usuario").val(localStorage.correo);
		$("#pa2").focus();	
			
		
		}else{
		$.mobile.changePage("#page1", {transition: "slide"},
            true,
            true);
			
			
			sumavisita();
			globo();
			onLoad();
			portada();
		}
	
	
	
	
	
	}
	

