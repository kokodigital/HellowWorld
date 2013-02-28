Ext.define('MyApp.view.Main', {
	extend : 'Ext.Container',
	config : {
		layout : {
			type : 'hbox',
			align : 'stretch'
		},
		items : [ {
			xtype : 'personlist',
			itemId : 'list',
			width : 200,
			style : 'border-right: 1px solid #999'
		}, {
			xtype : 'persondetail',
			itemId : 'detail',
			flex : 1
		} ],
		listeners : {
			select : {
				fn : 'onListSelect',
				delegate : '> #list'
			}
		}
	},
	onListSelect : function(list, record) {
		this.getComponent('detail').setRecord(record);
		alert('test');
	}
});