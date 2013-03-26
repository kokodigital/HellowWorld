Ext.define('QF.components.Buttons', {
	extend : 'Ext.Button',
	xtype : 'testbutton',

	pressed : function(e) {
		var btnClss = e.getCls().join();
		var btn = e;
		
		btn.setCls(btnClss + ' selected');
		
		setTimeout(function(){
			btn.setCls(btnClss.replace('selected', ''));
			}, 300);
	
	}

});
