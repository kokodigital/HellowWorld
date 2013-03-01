Ext.define('MyApp.view.Main202', {
	extend : 'Ext.Container',
	fullscreen : true,
	config : {
		itemId : 'mainContainer',
		layout : 'vbox',
	defaults : {
		width : '100%',
		flex : 1
		},
		items : [ {
			itemId : 'cardContainer',
			layout : {
				type : 'card',
				animation : 'slide'
			},
			activeItem : 0,
			items : [ {
				xtype : 'toolbar',
				docked : 'top',
				title : 'Nested Layouts',
				items : [ {
					text : 'Back',
					ui : 'back',
				xtype: 'button'
				}, {
					xtype : 'spacer'
				}, {
					text : 'Next',
					ui : 'forward',
					xtype: 'button'
				} ]
			}, {
				html : 'Card 1'
			}, {
				html : 'Card 2'
			}, {
				html : 'Card 3'
			} ]
		}, {
			layout : 'hbox',
			style : 'border: 1px solid blue;',
			defaults : {
				style : 'border: 1px solid red;',
				flex : 1
			},
			items : [ {
				html : 'Panel (0, 0)'
			}, {
				html : 'Panel (1, 0)'
			}, {
				html : 'Panel (2, 0)'
			} ]
		}, {
			layout : 'hbox',
			style : 'border: 1px solid blue;',
			defaults : {
				style : 'border: 1px solid red;',
				flex : 1
			},
			items : [ {
				html : 'Panel (0, 1)'
			}, {
				html : 'Panel (1, 1)'
			}, {
				html : 'Panel (2, 1)'
			} ]
		} ]
	}
});