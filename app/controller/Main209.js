Ext.define('MyApp.controller.Main209', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			mainpanel : 'mypanel'
		},
		control : {
			mainpanel : {
				'brettevent234' : 'handelNav'
			}
		},

		handelNav : function() {
			alert('123');
		}
	}
});