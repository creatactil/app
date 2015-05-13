function onDeviceReady() {
      document.addEventListener("backbutton", handleBackButton, true);
}
/*function handleBackButton(){
 
    if($.mobile.activePage.attr('id') == 'page1'
              || $.mobile.activePage.attr('id') == 'page1'){
        navigator.app.exitApp();
    }else if ($.mobile.activePage.attr('id') == 'page4'){
        alert("hh");
		$.mobile.changePage('page1');
		
    }else{
        navigator.app.backHistory();
    }
}
 */
document.addEventListener("deviceready", onDeviceReady, false);