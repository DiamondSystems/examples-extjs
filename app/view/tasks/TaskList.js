Ext.define('ExamplesExtJS.view.tasks.TaskList', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskList',

    requires: [
        'ExamplesExtJS.viewmodel.Task',
        'ExamplesExtJS.store.TaskLocalStore',
        'ExamplesExtJS.store.TaskStatusStore',
    ],

    reference: 'taskGrid',
    bind: {
        store: '{tasks}'
    },

    title: 'Tasks',
    selType: 'checkboxmodel',

    tbar: [{
        text: 'Add',
        tooltip: 'Add a new task',
        iconCls: 'x-fa fa-plus-circle',
        handler: 'onAddTask'
    }, '-', {
        text: 'Complete',
        tooltip: 'Remove the selected item',
        iconCls: 'x-fa fa-check',
        handler: 'onCompleteTask',
        bind: {
            disabled: '{!taskGrid.selection}'
        }
    }],

    columns: [
        { text: 'Title',       dataIndex: 'title' },
        { text: 'Description', dataIndex: 'desc', flex: 1 },
        {
            text: 'Status',
            dataIndex: 'status',
            width: 120,
            renderer: function(status)
            {
                return Ext.create('ExamplesExtJS.store.TaskStatusStore').getData().find('name', status).get('name');
            }
        },{
            text: 'Create',
            dataIndex: 'created_at',
            xtype: 'datecolumn',
            format: 'd-m-Y',
            width: 130,
        },{
            xtype: 'widgetcolumn',
            width: 120,
            widget: {
                xtype: 'button',
                text: 'Remove',
                handler: 'onRemoveTask'
            }
        }
    ],

    listeners: {
        select: 'onItemSelected',
    },

    rendererTaskStatus: function()
    {
        console.log('test 1', arguments);

        return 'ok';
    }
});
