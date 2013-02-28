Ext.define('MyApp.view.Main206', {
	extend : 'Ext.Panel',
	xtype: 'mypanel',
	config : {
		fullscreen : true,
		bodyStyle : 'padding: 10px;',
		layout : {
			type : 'vbox',
			pack : 'center'
		},
		items : [ {
			xtype : 'button',
			text : 'Add top',
				cls:'text1'
		}, {
			xtype : 'button',
			text : 'Remove top',
		cls:'text2'
		} ]
	}
});
