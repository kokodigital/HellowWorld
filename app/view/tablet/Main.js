Ext.define('QF.view.tablet.Main', {
	extend : 'Ext.Container',
	xtype : 'mainview',
	id : 'mainview',
	requires : [ 'QF.view.tablet.MainTopNav', 'QF.view.tablet.MainBottomNav' ],
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
			xtype : 'maintopnav-tablet',
			hidden : true

		},

		{
			xtype : 'loginview',
			flex : 1
		},

		{
			xtype : 'mainbottomnav-tablet',
			hidden : true

		} ]
	}
});
