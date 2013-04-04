Ext.define('QF.view.tablet.Login', {
	extend : 'Ext.Panel',
	xtype : 'loginview',
	id : 'loginview',

	config : {
		flex : 1,
		margin : '10px',
		layout : {
			type : 'vbox',
			pack : 'center',
			align : 'center'
		},
		items : [
				{
					xtype : 'button',
					id : 'logNavloginFB',
					text : 'Login with Facebook',
					minWidth : '300px',
					width : '100%',
					margin : '5px',
					listeners : {
						tap : function(e) {
						var redirectUrl = Ext.Object.toQueryString({
				            redirect_uri: 'http://kokodev.co.uk/qf/',
				            client_id: QF.app.facebookAppId,
				            response_type: 'token'
				        });						
						

					 window.plugins.childBrowser.showWebPage('https://m.facebook.com/dialog/oauth?' + redirectUrl, { showLocationBar: false });
						//window.location='https://m.facebook.com/dialog/oauth?' + redirectUrl;
					 
						}
					}
				},
				{
					xtype : 'button',
					id : 'logNavloginQF',
					text : 'Login with Quiz Factor Account',
					minWidth : '300px',
					width : '100%',
					margin : '5px',
					listeners : {
						tap : function(e) {
							this.fireEvent('loadViewEvent', this, 'Home', true,
									true, [ true, false ], [ false, false ]);

						}
					}
				},
				{
					xtype : 'button',
					id : 'logNavCreateAccount',
					text : 'Create Account',
					minWidth : '300px',
					width : '100%',
					margin : '5px',
					listeners : {
						tap : function(e) {
							this.fireEvent('loadViewEvent', this, 'Home', true,
									true, [ true, false ], [ false, false ]);
						}
					}
				} ]

	}

});