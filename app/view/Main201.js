Ext.define('MyApp.view.Main201', {
	extend : 'Ext.Container',
	fullscreen : true,
	
	defaults : {
		style : 'border: 1px solid blue;'
	},
	
	config : {
		itemId : 'mainContainer',
		activeItem : 0,
		
	layout : {
			type : 'card'
		},
		
		items : [ {
			xtype : 'toolbar',
			docked : 'top',
			title : 'Card Layout',
			height:'100px',
			items : [ {
				text : 'Back',
				ui : 'back',
				xtype:'button'
			}, {
				xtype : 'spacer'
			}, {
				text : 'Forward',
				ui : 'forward',
				xtype:'button'
			} ]
			
		}, {
			html : 'Card 1',
			style : 'background:url("Simpsons-Sofa.jpg") no-repeat;background-size: 100%;'
				
		}, {
			html : 'Card 2',
			style : 'background:url("The-Simpsons2.jpg") no-repeat;background-size: 100%;'
		}, {
			html : 'Card 3',
			style : 'background:url("The-Simpsons1.jpg") no-repeat;background-size: 100%;'
		} ]
	}
});