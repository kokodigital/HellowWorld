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
			cls : 'bottomBtn selected',
			minWidth:'140px',
			flex:1,
			iconCls : 'challengeIcon'
		}, {
			xtype : 'button',
			ui : 'plain',
			id : 'mainNavSoloQuest',
			text : 'Solo Quest',
			cls : 'bottomBtn',
			minWidth:'140px',
			flex:1,
			iconCls : 'soloIcon',
					}, {
			xtype : 'button',
			ui : 'plain',
			id : 'mainNavDailyChallenge',
			text : 'Daily Friends',
			cls : 'bottomBtn',
			minWidth:'140px',
			flex:1,
			iconCls : 'dailyIcon'
		}, {
			xtype : 'button',
			ui : 'plain',
			id : 'mainNavMore',
			text : 'More',
			cls : 'bottomBtn',
			minWidth:'140px',
			flex:1,
			iconCls : 'moreIcon'
		}, {
			xtype : 'spacer'
		} ]
	}
});
