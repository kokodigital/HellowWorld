Ext.define("NotesApp.model.Note", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'dateCreated', type: 'date' },
            { name: 'title', type: 'string' },
            { name: 'narrative', type: 'string' }
        ],
        validations: [
            { type: 'presence', field: 'id' },
            { type: 'presence', field: 'dateCreated' },
            { type: 'presence', field: 'title', message: 'Please enter a title for this note.' }
        ]
    }
});
