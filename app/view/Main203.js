Ext.define('MyApp.view.Main203', {
	extend : 'Ext.Panel',
	config : {
		fullscreen : true,
		style : 'background-color: #CCF;',
		html : 'Full screen Panel',
		items : [{
			xtype: 'panel',
			height : 200,
			width : 200,
			draggable : true,
			floating : true,
			html : 'Some help could go here.',
			left : 50,
			top : 50,
			modal:true,
			hideOnMaskTap: true,
			showAnimation:'pop',
			hideAnimation : 'fade',
			items : [{
			xtype : 'toolbar',
			docked : 'top',
			title : 'Drag me!'
			}]
		}]
	
	}
});
