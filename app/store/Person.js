Ext.define('MyApp.store.Person', {
	extend : 'Ext.data.Store',
	alias : 'store.personstore',
	requires : [ 'MyApp.model.Person', 'Ext.data.proxy.JsonP' ],
	config : {
		autoLoad : 'true',
		model : 'MyApp.model.Person',
		proxy : {
			type : 'jsonp',
			url : 'http://extjsinaction.com/dataQuery.php',
			limit : 20,
			reader : {
				type : 'json',
				rootProperty : 'records'
			}
		}

	}

});
