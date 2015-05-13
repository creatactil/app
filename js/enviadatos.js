 $(function() {

            $("#enviadatos").click(function() {
                var elNombre = $("#nombre_familiar").val();
    			var elTelefono = $("#telefono").val();
				var eldni = $("#dni").val();
    			var elparentesco = $("#parentesco").val();

				/*$("#nombre_familiar").val(" ");
				$("#telefono").val(" ");
    			$("#dni").val(" ");
    			$("#parentesco").val(" ");*/
                
           $.ajax({
           type: "POST",
           url: "http://venazco.hol.es/registrofam.php",
           data: ({nombre_familiar: elNombre, telefono: elTelefono, dni: eldni, parentesco: elparentesco }),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
                
            });

           

            function onSuccess(data)
            {
             
    		alert(data);
            }

        });