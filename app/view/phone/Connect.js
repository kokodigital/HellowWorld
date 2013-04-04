Ext.define('QF.view.phone.Connect', {
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
		items : [
				{
					xtype : 'button',
					id : 'conNavloginFB',
					text : 'Login with Facebook',
					minWidth : '300px',
					width : '100%',
					margin : '5px',
					listeners : {
						tap : function(e) {
							// this.fireEvent('loadViewEvent',
							// this, 'Home', true, true, [
							 //true, false ], [
							// false, false ]);
							try {
								  FB.api('/platform', function(response) {
									  console.log(response.company_overview);
							
							            Ext.Msg.alert('Success',  response.company_overview, Ext.emptyFn);


									});

							} catch (e) {
								
						
								 Ext.Msg.alert('Error',e, Ext.emptyFn);
								 console.log(e);
								 //console.log(window.PhoneGap.resources);
							}

						}
					}
				},
				{
					xtype : 'button',
					id : 'conNavloginQF',
					text : 'Login with Quiz Factor Account',
					minWidth : '300px',
					width : '100%',
					margin : '5px',
					listeners : {
						tap : function(e) {
							//this.fireEvent('loadViewEvent', this, 'Home', true,
									//true, [ true, false ], [ false, false ]);
							
									
						try {
						    FB.init({
					            appId: '628828893800003',
					            nativeInterface: CDV.FB,
					            useCachedDialogs: false
					        });

							} catch (e) {
								
						
								 Ext.Msg.alert('Error',e, Ext.emptyFn);
								 console.log(e);
								 //console.log(window.PhoneGap.resources);
							}



						}
					}
				},
				{
					xtype : 'button',
					id : 'conNavCreateAccount',
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