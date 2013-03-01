Ext.define('MyApp.view.Main201', {
	extend : 'Ext.Container',
	fullscreen : true,

	defaults : {
		style : 'border: 1px solid blue;'
	},

	config : {
		itemId : 'mainContainer',
		layout : 'card',
		animation : {
			type : 'flip',
			direction : 'left',
			duration : 300

		},

		items : [ {
			xtype : 'toolbar',
			docked : 'top',
			title : 'Card Layout',
			height : '100px',
			items : [ {
				text : 'Back',
				xtype : 'button'
			}, {
				xtype : 'spacer'
			}, {
				text : 'Forward',
				xtype : 'button'
			} ]},
			{
				xtype : 'toolbar',
				docked : 'bottom',
				title : 'Card Layout',
				height : '100px',
				items : [ {
					text : 'Back',
					xtype : 'button'
				}, {
					xtype : 'spacer'
				}, {
					text : 'Forward',
					xtype : 'button'
				} ]},
		{
			html : 'Card 1',
			style : 'background:#660000'// url("Simpsons-Sofa.jpg")
		// no-repeat;background-size: 100%;'
		}, {
			html : 'Card 2',
			style : 'background:#006600'// url("The-Simpsons2.jpg")
		// no-repeat;background-size: 100%;'
		}, {
			html : 'Card 3',
			style : 'background:#000066'// 'url("The-Simpsons1.jpg")
		// no-repeat;background-size: 100%;'
		}

		]
	}
});