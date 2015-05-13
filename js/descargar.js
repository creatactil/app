function descargar(){
	alert("prueba1");
	var destino = "file://sdcard/Download";
	
var fileTransfer = new FileTransfer();
var uri = encodeURI("http://venasco.hol.es/web/files/38006678-123-CalendarioAlumno.pdf");

alert("prueba2");


fileTransfer.download(
    uri,
    destino,
    function(entry) {
        console.log("Descarga completa: " + entry.fullPath);
    },
    function(error) {
        console.log("Descarga error source " + error.source);
        console.log("Descarga error target " + error.target);
        console.log("upload error code" + error.code);
    });	
}