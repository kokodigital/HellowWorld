Ext.define('QF.view.tablet.MainTopNav', {
	extend : 'Ext.Toolbar',
	xtype : 'maintopnav-tablet',
	config : {
		docked : 'top',
		cls:'mainTopNav',
		id:'mainTopNav',
		items : [ {
			xtype : 'button',
			id : 'mainNavBackButton',
			ui: 'back',
			text : 'Back',
			align : 'left',
			cls:'topBtn'
		}, {
			xtype : 'spacer'
		}, {
			xtype : 'image',
			id : 'mainNavLogo',
			height : '66px',
			width : '266px',
			backgroundCls : 'mainNavLogo'
		}, {
			xtype : 'spacer'
		}, {
			xtype : 'button',
			id : 'mainNavShopButton',
		    ui: 'plain',
			text : '99',
			align : 'right',
			cls:'topBtn',
			iconAlign: 'right', 
			iconCls:'powerIcon'
			
		} ]
	}

});
