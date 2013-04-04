Ext.define('QF.controller.tablet.Login', {
    extend: 'Ext.app.Controller',
    	

init: function(application) {
	  (function(d, s, id, debug){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "http://connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk', /*debug*/ false));
}

});