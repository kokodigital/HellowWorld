Ext.define('MyApp.controller.Main206', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			mainpanel : 'mypanel'
		},
		control : {
			'mypanel button' : {
				tap : 'handelNav'
			}
		}
	},

	handelNav : function(btn) {
		var myPanel = this.getMainpanel();
		var dockedItems = myPanel.getDockedItems();
		var totalItems = dockedItems.length;

		if (btn.getText() == 'Add top') {
			myPanel.add({
				xtype : 'container',
				docked : 'top',
				style : 'border-bottom: 1px solid; background-color: #F99;',
				height : 30,
				html : 'Top dock: ' + totalItems
			});
		} else {

			if (totalItems > 0) {
				dockedItem = myPanel.getDockedComponent(totalItems - 1);
				myPanel.remove(dockedItem, true);
			}

		}

	}
});