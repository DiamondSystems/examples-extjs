Ext.define('ExamplesExtJS.view.tasks.TaskForm', {
    extend: 'Ext.form.Panel',
    xtype: 'taskForm',

    requires: [
        'ExamplesExtJS.viewmodel.Task'
    ],

    viewModel: 'task',

    layout: 'vbox',
    reference: 'taskForm',

    fieldDefaults: {
        labelAlign: 'top',
        width: '100%',
        anchor: '-5',
    },

    defaults: {
        border: false,
        xtype: 'panel',
    },

    items: [{
        xtype: 'textfield',
        fieldLabel: 'Title',
        name: 'title',
        allowBlank: false,
        minLength: 2,
    },{
        xtype: 'textareafield',
        fieldLabel: 'Description',
        name: 'desc',
        anchor: '100%',
        grow: true,
        growMin: 120,
        allowBlank: false,
        minLength: 2,
    },{
        xtype: 'container',
        width: '100%',
        layout: {
            type: 'hbox',
            pack: 'end'
        },
        defaults: {
            margin: '5 0 0 3',
        },
        items: [{
            xtype: 'button',
            text: 'Save',
            handler: 'onTaskSave'
        },{
            xtype: 'button',
            text: 'Cancel',
            handler: 'onTaskCancel'
        }]
    }]
});
