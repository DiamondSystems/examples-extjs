Ext.define('ExamplesExtJS.view.tasks.TaskFilters', {
    extend: 'Ext.form.Panel',
    xtype: 'taskFilters',

    requires: [
        'ExamplesExtJS.store.TaskStatusStore'
    ],

    layout: 'vbox',
    reference: 'taskFilter',

    fieldDefaults: {
        labelAlign: 'top'
    },

    defaults: {
        border: false,
        xtype: 'panel',
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Search',
        name: 'search',
        width: '100%',
        anchor: '-5',
        reference: 'taskFilterSearch',
        enableKeyEvents: true,
        listeners: {
            keyup: 'onFilterSearchKeyup',
            buffer: 500
        }
    },{
        xtype: 'combo',
        width: 120,
        queryMode: 'local',
        value: 'all',
        triggerAction: 'all',
        forceSelection: true,
        editable: false,
        reference: 'taskFilterStatus',
        fieldLabel: 'Status',
        name: 'status',
        displayField: 'name',
        valueField: 'value',
        store: Ext.create('ExamplesExtJS.store.TaskStatusStore'),
        listeners:{
            select: 'onFilterStatus'
        }
    }]
});
