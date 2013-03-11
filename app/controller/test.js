Ext.define("NotesApp.controller.test", {
	extend : "Ext.app.Controller",
	config : {
		
	},

	// Base Class functions.
	launch : function() {
		this.callParent(arguments); 
		console.log("launch test");
	},

	init : function() {
		this.callParent(arguments);
		console.log("init test"); // then runs my extra code after wards
	}
});
