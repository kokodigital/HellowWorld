Ext.define('QF.view.tablet.Main', {
		extend : 'Ext.Container',
		xtype : 'mainview',
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
				xtype : 'mainbottomnav-tablet'

			},

			{
				id : 'launchscreen',
				scrollable : true,
				html : 'test here',
				flex: 1,
			},

			{
				xtype : 'maintopnav-tablet'

			} ]
		}
	});
