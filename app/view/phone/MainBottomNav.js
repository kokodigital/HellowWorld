Ext.define('QF.view.phone.MainBottomNav', {
	extend : 'Ext.Toolbar',
	xtype : 'mainbottomnav-phone',
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
			cls : 'bottomBtn selected',
			minWidth : '76px',
			iconCls : 'challengeIcon',
			flex : 1,
			pressedDelay:0

		}, {
			xtype : 'button',
			ui : 'plain',
			id : 'mainNavSoloQuest',
			text : 'Solo Quest',
			cls : 'bottomBtn',
			minWidth : '76px',
			iconCls : 'soloIcon',
			flex : 1,
			pressedDelay:0
		}, {
			xtype : 'button',
			ui : 'plain',
			id : 'mainNavDailyChallenge',
			text : 'Daily Friends',
			cls : 'bottomBtn',
			minWidth : '76px',
			iconCls : 'dailyIcon',
			flex : 1,
			pressedDelay:0
		}, {
			xtype : 'button',
			ui : 'plain',
			id : 'mainNavMore',
			text : 'More',
			cls : 'bottomBtn',
			minWidth : '76px',
			iconCls : 'moreIcon',
			flex : 1,
			pressedDelay:0
		}, {
			xtype : 'spacer'
		} ]
	}
});
