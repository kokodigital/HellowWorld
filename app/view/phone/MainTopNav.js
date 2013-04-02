Ext.define('QF.view.phone.MainTopNav', {
	extend : 'Ext.Toolbar',
	xtype : 'maintopnav-phone',
	config : {
		docked : 'top',
		cls : 'mainTopNav',
		id : 'mainTopNav',
		items : [ {
			xtype : 'button',
			id : 'mainNavBackButton',
			ui : 'back',
			text : 'Back',
			align : 'left',
			cls : 'topBtn',
			pressedDelay : 0,
			listeners : {
				tap : function(e) {
					this.fireEvent('backEvent', '', 'back');
				}
			}
		}, {
			xtype : 'spacer'
		}, {
			xtype : 'image',
			id : 'mainNavLogo',
			height : '33px',
			width : '133px',
			backgroundCls : 'mainNavLogo',
			align:'center'
		}, {
			xtype : 'spacer'
		}, {
			xtype : 'button',
			id : 'mainNavShopButton',
			ui : 'plain',
			text : '0',
			align : 'right',
			cls : 'topBtn',
			iconAlign : 'right',
			iconCls : 'powerIcon',
			pressedDelay : 0,
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this, 'Shop', false, true,[false,true],[true, true]);
				}
			}

		} ]
	}

});
