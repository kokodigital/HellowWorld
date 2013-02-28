Ext.define('MyApp.view.Main209', {
	extend : 'Ext.Panel',
	xtype : 'mypanel',
	config : {
		fullscreen : true,
		html : "Test the overlay by <a href='#'>clicking this link</a>",

		listeners : {
			tap : {
				fn : function(btn) {
					// handler code
					this.fireEvent('brettevent234', this);
				},

				element : 'element',
				delegate : 'a'
			}
		}

	}

});
