function ponercurso(clave, curso) {
		
		
		
		
		$.mobile.changePage("#page3");
		var clave = clave;
		var curso = curso;
		$("#boxcurso").val(clave);
		$(".btncurso").prop('value', curso);
		$(".btncurso").button('refresh'); 
	}

function Ponegrupo(grupo) {
		
		$.mobile.changePage("#page3");
		var grupo = grupo;
		$("#boxgrupo").val(grupo);
		$(".btngrupo").prop('value', grupo);
		$(".btngrupo").button('refresh'); 
	}
