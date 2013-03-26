Ext.define('QF.view.tablet.MainBottomNav', {
	extend : 'Ext.Toolbar',
	requires:['QF.components.Buttons'],
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
					Ext.getCmp('launchscreen').setHtml('<h1>Challenges</h1>');
				}
			}
		}, {
			xtype : 'testbutton',
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
				this.pressed(e);
				
				Ext.getCmp('launchscreen').setHtml('<h1>Solo</h1>');
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
					Ext.getCmp('launchscreen').setHtml('<h1>Daily</h1>');
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
					Ext.getCmp('launchscreen').setHtml('<h1>More</h1>');
				}
			}
		}, {
			xtype : 'spacer'
		} ]
	}
});
