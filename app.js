//<debug>
Ext.Loader.setPath({
	'Ext' : 'touch/src',
	'MyApp' : 'app'
});
//</debug>

Ext.application({
	
			 controllers: ["Main201"],
			// controllers: ["Main202"],
			 //controllers: ["Main206"],
			//controllers: ["Main209"],
			
			name : 'MyApp',
			requires : [ 'Ext.MessageBox' ],
			
			// views : [ 'Main2' ],
			 views : [ 'Main201' ],
			 //views : [ 'Main202' ],
			 //views : [ 'Main203' ],
			// views : [ 'Main204' ],
			// views : [ 'Main205','Main205topdock','Main205bottomdock','Main205leftdock','Main205rightdock'],
			 //views : [ 'Main206'],
			// views : [ 'Main207','Main207toolbar'],
			// views : [ 'Main208','Main208tbar','Main208bbar'],
			  // views : [ 'Main209' ],
			
			icon : {
				'57' : 'resources/icons/Icon.png',
				'72' : 'resources/icons/Icon~ipad.png',
				'114' : 'resources/icons/Icon@2x.png',
				'144' : 'resources/icons/Icon~ipad@2x.png'
			},

			isIconPrecomposed : true,

			startupImage : {
				'320x460' : 'resources/startup/320x460.jpg',
				'640x920' : 'resources/startup/640x920.png',
				'768x1004' : 'resources/startup/768x1004.png',
				'748x1024' : 'resources/startup/748x1024.png',
				'1536x2008' : 'resources/startup/1536x2008.png',
				'1496x2048' : 'resources/startup/1496x2048.png'
			},

			launch : function() {
				// Destroy the #appLoadingIndicator element
				Ext.fly('appLoadingIndicator').destroy();

				// Initialize the main view

				// Ext.Viewport.add(Ext.create('MyApp.view.Main2'));
				// Ext.Viewport.add(Ext.create('MyApp.view.Main201'));
				// Ext.Viewport.add(Ext.create('MyApp.view.Main202'));
				// Ext.Viewport.add(Ext.create('MyApp.view.Main203'));
				// Ext.Viewport.add(Ext.create('MyApp.view.Main204'));
				// Ext.Viewport.add(Ext.create('MyApp.view.Main205'));
				Ext.Viewport.add(Ext.create('MyApp.view.Main201'));
				


			},

			onUpdated : function() {
				Ext.Msg
						.confirm(
								"Application Update",
								"This application has just successfully been updated to the latest version. Reload now?",
								function(buttonId) {
									if (buttonId === 'yes') {
										window.location.reload();
									}
								});
			}
		});
