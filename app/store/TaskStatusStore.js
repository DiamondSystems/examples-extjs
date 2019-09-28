Ext.define('ExamplesExtJS.store.TaskStatusStore', {
    extend: 'Ext.data.Store',

    fields: ['name', 'value'],
    data: [
        {name : 'All',       value: 'all' },
        {name : 'Active',    value: 'active' },
        {name : 'Completed', value: 'completed' }
    ]
});
