/*Ext.define("NotesApp.store.Notes", {
    extend: "Ext.data.Store",
    requires:["Ext.data.proxy.LocalStorage"],
    config: {
        model: "NotesApp.model.Note",
        proxy: {
        
           type: 'localstorage',
           id: 'notes-app-store'
        },
        sorters: [{ property: 'dateCreated', direction: 'DESC'}],
        grouper: {
            sortProperty: "dateCreated",
            direction: "DESC",
            groupFn: function (record) {

                if (record && record.data.dateCreated) {
                    return record.data.dateCreated.toDateString();
                } else {
                    return '';
                }
            }
        }
    }
});
 */

Ext.define('NotesApp.store.Notes', {

	extend : 'Ext.data.Store',

	requires : [ 'NotesApp.model.Note' ],

	config : {
		model : 'NotesApp.model.Note',
		autoLoad : true,
		storeId : 'Notes',
		pageSize : 1000,
		sorters : [ {
			property : 'dateCreated',
			direction : 'DESC'
		} ],
		grouper : {
			sortProperty : 'dateCreated',
			direction : 'DESC',
			groupFn : function(record) {

				if (record && record.data.dateCreated) {
					return record.data.dateCreated.toDateString();
				} else {
					return '';
				}
			}
		},

		proxy : {
			type : 'sqlitestorage',
			dbConfig : {
				tablename : 'notes',
				dbConn : NotesApp.util.InitSQLite.getConnection()
			}
		}
	}
});