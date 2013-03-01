//<debug>
Ext.Loader.setPath({
	'Ext' : 'touch/src',
	'MyApp' : 'app'
});
//</debug>

Ext.application({
	
			// controllers: ["Main201"],
			// controllers: ["Main202"],
			 // controllers: ["Main206"],
			// controllers: ["Main209"],
			
			name : 'MyApp',
			requires : [ 'Ext.MessageBox' ],
			
			// views : [ 'Main2' ],
			// views : [ 'Main201' ],
			 // views : [ 'Main202' ],
			 // views : [ 'Main203' ],
			// views : [ 'Main204' ],
			// views : [
			// 'Main205','Main205topdock','Main205bottomdock','Main205leftdock','Main205rightdock'],
			 // views : [ 'Main206'],
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
				// Ext.Viewport.add(Ext.create('MyApp.view.Main201'));
				
var handleNavigation = function(btn) { 
var currentContainer = myContainer.getActiveItem(), 
innerItems = myContainer.getInnerItems(),
totalItems = innerItems.length,
currentIndex = innerItems.indexOf(currentContainer),
direction,
newIndex;
if (btn.getText() == 'Back') { 
direction = 'right';
newIndex = currentIndex > 0
? (currentIndex - 1) : (totalItems - 1);
}
else {
direction = 'left';
newIndex = currentIndex < (totalItems - 1)
? (currentIndex + 1) : 0;
}
myContainer.animateActiveItem(newIndex, {
type : 'slide',
direction : direction
});
};
var myContainer = Ext.create('Ext.Container',{
fullscreen : true,
activeItem : 1, 
layout : {
type : 'card', 
animation : 'slide'
},
items : [
{
xtype : 'toolbar',
docked : 'top',
title : 'Card Layout',
items : [
{
text : 'Back',
ui : 'back',
handler : handleNavigation 
},
{ xtype : 'spacer' },
{
text : 'Forward',
ui : 'forward',
handler : handleNavigation
}
]
},
{
html : 'Card 1',
style : 'background-color: #99F;'
},
{
html : 'Card 2',
style : 'background-color: #F99;'
},
{
html : 'Card 3',
style : 'background-color: #9F9;'
}
]
});



Ext.Viewport.add(myContainer)


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
