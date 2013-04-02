Ext.define('QF.view.phone.Main', {
	extend : 'Ext.Container',
	xtype : 'mainview',
	id : 'mainview',
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
			xtype : 'maintopnav-phone',
			hidden : true

		},

		{
			xtype : 'connectview',
			flex : 1
		},

		{
			xtype : 'mainbottomnav-phone',
			hidden : true

		} ]
	}
});
