Ext.define('QF.controller.phone.Login', {
    extend: 'Ext.app.Controller',
    	
init: function(application) {
	
	 window.fbAsyncInit = Ext.bind(this.onFacebookInit, this);
	 // run facebook init when facebook js SDk is ready

	  (function(d, s, id, debug){
		     var js, fjs = d.getElementsByTagName(s)[0];
		     if (d.getElementById(id)) {return;}
		     js = d.createElement(s); js.id = id;
		     js.src = "http://connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
		     fjs.parentNode.insertBefore(js, fjs);
		   }(document, 'script', 'facebook-jssdk', /* debug */ false));
},

onFacebookInit: function() {
        if (QF.app.facebookAppId === '') return;

        FB.init({
            appId  : QF.app.facebookAppId,
            cookie : true
        });

        FB.Event.subscribe('auth.logout', Ext.bind(this.onLogout, this));

        FB.getLoginStatus(function(response) {

            me.hasCheckedStatus = true;
            Ext.Viewport.setMasked(false);

            Ext.get('splashLoader').destroy();
            Ext.get('rwf-body').addCls('greyBg');

            if (response.status == 'connected') {
               // this.onLogin();
            } else {
              // this.login();
            }
        });
      },
  
onLogin: function() {
    var errTitle;

    FB.api('/me', function(response) {

        if (response.error) {
            FB.logout();

            errTitle = "Facebook " + response.error.type + " error";
            Ext.Msg.alert(errTitle, response.error.message, function() {
                this.login();
            });
        } else {
         console.log(response);   
        
        // JWF.userData = response;
          //  if (!this.main) {
          //      this.main = Ext.create('JWF.view.Main', {
                 //   id: 'main'
          //      });
         //   }
            //Ext.Viewport.setActiveItem(this.main);
          //  Ext.getStore('Runs').load();
        }
    });
}

});