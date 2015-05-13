function portada(){
	
		var vcodigo = localStorage.codigo;
		
	if (typeof vcodigo == 'undefined'){
			
			$("#portada").attr("src", "http://mc.creatactil.com/imgportada/0.jpg");
		}
			else{
			$("#portada").attr("src", "http://mc.creatactil.com/imgportada/"+localStorage.codigo+".jpg");
			}
	}