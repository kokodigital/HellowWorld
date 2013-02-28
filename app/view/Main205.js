Ext.define('MyApp.view.Main205', {
	extend : 'Ext.Panel',
	config : {
		fullscreen : true,
		bodyStyle : 'padding: 10px;',
		html : 'Panel content body',
		items : [ {
			xtype : 'topdock'
		}, {
			xtype : 'bottomdock'
		}, {
			xtype : 'leftdock'
		}, {
			xtype : 'rightdock'
		} ]
	}
});
