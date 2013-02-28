Ext.define('MyApp.view.Main204', {
	extend : 'Ext.TabPanel',
	config : {
		title: 'qwe',
		fullscreen : true,
		ui : 'light',
		tabBar : {
			docked : 'bottom',
		style: 'background:red',
			layout : {
				pack : 'center',
			}
		},
		items : [ 
		          
		{
			style : 'background-color: #FCC;',
			html : 'Panel 1',
			title : 'User',
			iconCls : 'user'
		}, {
			style : 'background-color: #CFC;',
			html : 'Panel 2',
			title : 'Groups',
			iconCls : 'team'
		}, {
			style : 'background-color: #CCF;',
			html : 'Panel 3',
			title : 'Locations',
			iconCls : 'maps'
		}, {
			style : 'background-color: #FFC;',
			html : 'Panel 4',
			title : 'Settings',
			iconCls : ''
		} ]
	}
});
