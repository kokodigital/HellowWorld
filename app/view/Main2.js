Ext.define('MyApp.view.Main2', {
	extend : 'Ext.Container',
	fullscreen : true,
	defaults : {
		style : 'border: 1px solid blue;'
	},
	config : {
		itemId : 'mainContainer',

		items : [ {
			docked : 'top',
			xtype : 'toolbar',
			title : 'Default Layout'
		}, {
			docked : 'bottom',
			xtype : 'toolbar',
			items : [ {
				text : 'Add Child',
				handler : function() {
					this.up('#mainContainer').add({
						xtype : 'container',
						style : 'border: 1px solid blue;',
						html : 'Child'
					});
				}
			}, {
				text : 'Add Fixed Width Child',
				handler : function() {
					this.up('#mainContainer').add({
						xtype : 'container',
						style : 'border: 1px solid blue;',
						width : 100,
						html : 'Fixed Child'
					});
				}
			} ]
		}, {
			html : 'First Child'
		}, {
			html : 'Fixed Width Child',
			width : 100
		}, {
			html : 'Child'
		} ]
	}
});
