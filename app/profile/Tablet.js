Ext.define('QF.profile.Tablet', {
	extend : 'QF.profile.Base',

	config : {

		controllers : [ 'Main','Login' ],
		views: ['Main','Login','Home','Challenges','SoloQuest','DailyFriends','Shop','Settings']
	
	},

	isActive : function() {
		return Ext.os.is.Tablet ;//|| Ext.os.is.Desktop;
	},

	launch : function() {
			var cssDom = Ext.getDom('maincss');
				cssDom.href = 'resources/2xRes/css/qf-main-x2-tablet.css?'+Math.floor(Math.random()*10e12);
				//### css class for retina graphics x2 bigger
			
			// ### change the css dependent on the device platform
		
		Ext.fly('appLoadingIndicator').destroy();
		// ### remove loading indicator
		
		Ext.create('QF.view.tablet.Main');
		// ### load tablet main view
		this.callParent();
	
	}
});
