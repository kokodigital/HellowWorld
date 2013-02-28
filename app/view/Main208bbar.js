Ext.define('MyApp.view.Main208bbar', {
	extend : 'Ext.Toolbar',
	xtype : 'bbar',
config : {
	docked : 'bottom',
	height : 60,
	defaults : {
		iconMask : true
	},
	items : [ {
		iconCls : 'refresh',
		iconAlign : 'top',
		ui : 'plain'
	}, {
		text : 'search',
		iconCls : 'search',
		ui : 'drastic',
		iconAlign : 'bottom'
	} ]
	}
});