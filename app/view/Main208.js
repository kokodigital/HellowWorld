Ext.define('MyApp.view.Main208', {
	extend : 'Ext.Panel',
	xtype : 'mypanel',
	config : {
		fullscreen : true,
		defaultType : 'button',
		defaults : {
			iconMask : true
		},
		layout : {
			type : 'vbox',
			pack : 'center',
			align : 'center'
		},
		items : [ {
			xtype : 'tbar'
		}, {
			xtype : 'bbar'
		}, {
			text : 'generic',
			width : 150
		}, {
			text : 'compose',
			iconCls : 'compose',
			iconAlign : 'right',
			ui : 'action',
			width : 150
		}, {
			text : 'star',
			iconCls : 'star',
			ui : 'confirm',
			width : 150
		} ]
	}
});
