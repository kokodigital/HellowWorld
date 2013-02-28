Ext.define('MyApp.model.Person', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'city', type: 'string'},
            {name: 'firstname', type: 'string'},
            {name: 'lastname', type: 'string'},
            {name: 'middle', type: 'string'},
            {name: 'state', type: 'string'},
            {name:  'street', type: 'string'},
            {name:  'zip', type: 'string'}
            
        ]
    }
});