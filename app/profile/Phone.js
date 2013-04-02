Ext.define('QF.profile.Phone', {
    extend: 'QF.profile.Base',

    config: {
        controllers: ['Main'],
        views: ['Main','Connect','Home','Challenges','SoloQuest','DailyFriends','Shop','Settings']
    },

    isActive: function() {
        return Ext.os.is.Phone || Ext.os.is.Desktop;
    },

    launch: function() {

	 var cssDom = Ext.getDom('maincss');
	
	 
	  if(window.devicePixelRatio == 2){
		  cssDom.href = 'resources/css/qf-main-x2.css?'+Math.floor(Math.random()*10e12);
		  //### css class for retina graphics x2 bigger
	   } else  if(window.devicePixelRatio > 1){
		   cssDom.href = 'resources/css/qf-main-x15.css?'+Math.floor(Math.random()*10e12);
		 //### css class for medium graphics x1.5 bigger
	   }
	   //### change the css dependent on the device platform
	
    	Ext.fly('appLoadingIndicator').destroy();
    	//### remove loading indicator
        Ext.create('QF.view.phone.Main');
        //### load phone main view
        this.callParent();
	
    }
});
