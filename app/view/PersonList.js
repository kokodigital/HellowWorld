Ext.define('MyApp.view.PersonList', {
	extend : 'Ext.List',
	xtype : 'personlist',
	config : {
		allowDeselect : false,
		itemTpl : '{lastname}, {firstname}',
		store : {
			type : 'personstore'
		},
		items : [ {
			xtype : 'toolbar',
			title : 'People',
			docked : 'top'
		}

		]

	}

});
