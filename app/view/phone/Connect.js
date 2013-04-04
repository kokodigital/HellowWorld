Ext
		.define(
				'QF.view.phone.Connect',
				{
					extend : 'Ext.Panel',
					xtype : 'connectview',
					id : 'connectview',
					initialize : function() {
						this.callParent(arguments);
						window.fbAsyncInit = Ext.bind(this.onFacebookInit, this);

					//	(function(d){
						//	var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
						//	js = d.createElement('script'); js.id = id; js.async = true;
						//	js.src = "//connect.facebook.net/en_US/all.js";
						//	d.getElementsByTagName('head')[0].appendChild(js);
						//}(document));
						
						(function(d, s, id, debug){
						 var js, fjs = d.getElementsByTagName(s)[0];
						 if (d.getElementById(id)) {return;}
						 js = d.createElement(s); js.id = id;
						 js.src = "//connect.facebook.net/en_US/all" + (debug ? "/debug" : "") + ".js";
						 fjs.parentNode.insertBefore(js, fjs);
					   }(document, 'script', 'facebook-jssdk', /*debug*/ false));
						
						
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