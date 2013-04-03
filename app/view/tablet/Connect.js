Ext.define('QF.view.tablet.Connect', {
	extend : 'Ext.Panel',
	xtype : 'connectview',
	id : 'connectview',
	config : {
		flex : 1,
		margin : '10px',
		layout : {
			type : 'vbox',
			pack : 'center',
			align : 'center'
		},
		items : [ {
			xtype : 'button',
			id : 'conNavloginFB',
			text : 'Login with Facebook',
			minWidth : '300px',
			width : '100%',
			margin : '5px',
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this, 'Home', true, true,[true,false],[false, false]);
				}
			}
		}, {
			xtype : 'button',
			id : 'conNavloginQF',
			text : 'Login with Quiz Factor Account',
			minWidth : '300px',
			width : '100%',
			margin : '5px',
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this, 'Home', true, true,[true,false],[false, false]);
				}
			}
		}, {
			xtype : 'button',
			id : 'conNavCreateAccount',
			text : 'Create Account',
			minWidth : '300px',
			width : '100%',
			margin : '5px',
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this, 'Home', true, true,[true,false],[false, false]);
				}
			}
		} ]

	}

});