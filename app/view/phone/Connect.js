Ext
		.define(
				'QF.view.phone.Connect',
				{
					extend : 'Ext.Panel',
					xtype : 'connectview',
					id : 'connectview',
					initialize : function() {
						this.callParent(arguments);
						document
								.addEventListener(
										'deviceready',
										function() {
											try {
												alert('Device is ready! Make sure you set your app_id below this alert.');
												FB.init({
													appId : "628828893800003",
													nativeInterface : CDV.FB,
													useCachedDialogs : false
												});

											} catch (e) {
												alert(e);
											}
										}, false);

					},

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
											// true, false ], [
											// false, false ]);

											FB.login(function(response) {
												if (response.session) {
													alert('logged in');
												} else {
													alert('not logged in');
												}
											}, {
												scope : "email"
											});

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
											this.fireEvent('loadViewEvent',
													this, 'Home', true, true, [
															true, false ], [
															false, false ]);
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
											this.fireEvent('loadViewEvent',
													this, 'Home', true, true, [
															true, false ], [
															false, false ]);
										}
									}
								} ]

					}

				});