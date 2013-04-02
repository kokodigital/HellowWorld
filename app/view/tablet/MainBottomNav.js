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
			ui : 'plain',
			id : 'mainNavChallengeFriends',
			text : 'Challenges',
			cls : 'bottomBtn',
			minWidth : '140px',
			flex : 1,
			iconCls : 'challengeIcon',
			pressedDelay : 0,
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this);
					this.fireEvent('pressStateEvent', this);
				}
			}
		}, {

			xtype : 'button',
			ui : 'plain',
			id : 'mainNavSoloQuest',
			text : 'Solo Quest',
			cls : 'bottomBtn',
			minWidth : '140px',
			flex : 1,
			iconCls : 'soloIcon',
			pressedDelay : 0,
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this);
					this.fireEvent('pressStateEvent', this);
				}
			}

		}, {
			xtype : 'button',
			ui : 'plain',
			id : 'mainNavDailyChallenge',
			text : 'Daily Friends',
			cls : 'bottomBtn',
			minWidth : '140px',
			flex : 1,
			iconCls : 'dailyIcon',
			pressedDelay : 0,
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this);
					this.fireEvent('pressStateEvent', this);
				}
			}
		}, {
			xtype : 'button',
			ui : 'plain',
			id : 'mainNavMore',
			text : 'More',
			cls : 'bottomBtn',
			minWidth : '140px',
			flex : 1,
			iconCls : 'moreIcon',
			pressedDelay : 0,
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this);
					this.fireEvent('pressStateEvent', this);
				}
			}
		}, {
			xtype : 'spacer'
		} ]
	}
});
