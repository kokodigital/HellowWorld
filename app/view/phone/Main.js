Ext.define('QF.view.phone.Main', {
	extend : 'Ext.Container',
	xtype : 'mainview',
	requires : [ 'QF.view.phone.MainTopNav', 'QF.view.phone.MainBottomNav' ],
	config : {
		fullscreen : true,

		layout : {
			type : 'card',
			animation : {
				type : 'slide',
				direction : 'left',
				duration : 250
			}
		},

		items : [ {
			xtype : 'mainbottomnav-phone'
	
		},

		{
			id : 'launchscreen',
			scrollable : true,
			html : 'test here',
			flex:1	
		},

		{
			xtype : 'maintopnav-phone'

		} ]
	}
});
