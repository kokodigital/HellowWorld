Ext.define('QF.view.phone.Home', {
	extend : 'Ext.Panel',
	xtype : 'homeview',
	id : 'homeview',
	config : {
		flex : 1,
		margin : '10px',
		layout : {
			type : 'vbox',
			pack : 'center',
			align : 'center'
		},
		items : [ {
			xtype : 'button',
			id : 'homNavPlayFriend',
			text : 'Play with a Friend',
			minWidth : '300px',
			width : '100%',
			margin : '5px',
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this, 'Challenges', false, false,[true,false],[false, false]);
				}
			}
		}, {
			xtype : 'button',
			id : 'homNavPlaySolo',
			text : 'Play Solo',
			minWidth : '300px',
			width : '100%',
			margin : '5px',
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this, 'SoloQuest', false, false,[true,false],[false, false]);
				}
			}
		}, {
			xtype : 'button',
			id : 'homNavPlayDaily',
			text : 'Daily Challenge',
			minWidth : '300px',
			width : '100%',
			margin : '5px',
			listeners : {
				tap : function(e) {
					this.fireEvent('loadViewEvent', this, 'DailyFriends', false, false,[true,false],[false, false]);
				}
			}
		} ]

	}

});