Ext.define('ExamplesExtJS.model.Task', {
    extend: 'Ext.data.Model',
    alias: 'model.task',

    idProperty: 'id',
    fields: [
        { name: 'id',         type: 'int'    },
        { name: 'title',      type: 'string' },
        { name: 'desc',       type: 'string' },
        { name: 'status',     type: 'string' },
        { name: 'created_at', type: 'date',  dateFormat: 'd-m-Y' },
    ],
    validations: [{
        field: 'title',
        type: 'presence'
    },{
        field: 'desc',
        type: 'presence'
    }]
});