Ext.define('QF.view.tablet.MainBottomNav', {
	extend : 'Ext.Toolbar',
	xtype : 'mainbottomnav-tablet',
	config : {
		docked : 'bottom',
		cls : 'mainBottomNav',
		id : 'mainBottomNav',
		items : [ {
			xtype : 'spacer'
		}, {
			xtype : 'button',
			ui:'plain',
			id : 'mainNavHome',
			iconCls : 'home',
			iconMask: true,
			width:'100px',
			cls : 'bottomBtn',
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this,'Home', true, true,[true,false],[false, false]);
				}
			}
		}, {

			xtype : 'button',
			ui:'plain',
			id : 'mainNavSettings',
			iconCls : 'settings',
			iconMask: true,
			width:'100px',
			cls : 'bottomBtn',
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this,'Settings',false, true,[false,true],[true,true]);
				}
			}

		}, {
			xtype : 'spacer'
		} ]
	}
});
