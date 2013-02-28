Ext.define('MyApp.view.Main207toolbar', {
	extend : 'Ext.Toolbar',
	xtype : 'mytoolbar',
	config : {
		docked : 'top',
		title : 'User admin',
		items : [ {
			xtype : 'spacer'
		}, {
			xtype : 'textfield',
			width : 200
		}, {
			xtype : 'button',
			iconCls : 'search',
			ui : 'plain',
			iconMask : true
		} ]
	}

});