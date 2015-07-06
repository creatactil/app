$( document ).ready(function() {
       
	    $('#parentesco').on("change", function() {
  
  			var xparent = $("#parentesco").val();
			
			
  				if (xparent == "MAESTRO"){
					$.mobile.changePage("#page3b", {transition: "slide"},
            true,
            true);
				
					}
			});
    
	$("#nombre_familiar").focus(function(){
    		
			var xparent2 = $("#parentesco").val();
			
			if (xparent2 == "MAESTRO"){
					$.mobile.changePage("#page3b", {transition: "slide"},
            true,
            true);
				
					}
});
	
	
	});
	
