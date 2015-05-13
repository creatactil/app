function lasesion(){
var xdni = localStorage.dni;


if (typeof xdni == 'undefined'){
	
	
	alert("Regístrese, su dispositivo no tiene datos de registro. NOTA: Si sus datos se han borrado por algún motivo introduzca solo sus Datos personales --NO LOS DEL ALUMNO--");
	$.mobile.changePage("#page2", {transition: "slide"},
            true,
            true);
	
	
		
	}else{
		crearLista();
		
		}
		
}