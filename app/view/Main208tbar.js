Ext.define('MyApp.view.Main208tbar', {
	extend : 'Ext.Toolbar',
	xtype : 'tbar',
config : {
	docked : 'top',
	defaults : {
		iconMask : true
	},
	items : [ {
		text : 'delete',
		iconCls : 'delete',
		iconAlign : 'left',
		ui : 'back'
	}, {
		text : 'organize',
		iconCls : 'organize',
		iconAlign : 'right',
		ui : 'decline'
	} ]
	}
});