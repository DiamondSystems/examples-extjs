Ext.define('ExamplesExtJS.view.tasks.Tasks', {
    extend: 'Ext.panel.Panel',
    xtype: 'appTasks',

    requires: [
        'Ext.layout.container.Border',
        'ExamplesExtJS.view.tasks.TaskList',
        'ExamplesExtJS.view.tasks.TaskFilters',
        'ExamplesExtJS.view.tasks.TaskForm',
        'ExamplesExtJS.viewcontroller.Tasks',
        'ExamplesExtJS.viewmodel.Task',
    ],

    viewModel: 'task',
    controller: 'tasks',

    layout: 'border',
    bodyBorder: false,

    defaults: {
        split: true,
        bodyPadding: 10
    },

    initComponent: function()
    {
        this.items = [
            this.createTaskForm(),
            this.createTaskFilters(),
            this.createTaskList(),
        ];

        this.callParent(...arguments);
    },

    createTaskFilters: function()
    {
        this.taskFilters = Ext.create({
            xtype: 'taskFilters',
            title: 'Filters',
            region:'west',
            floatable: false,
            collapsible: true,
            width: 220,
            minWidth: 200,
            maxWidth: 300,
        });

        return this.taskFilters;
    },

    createTaskList: function()
    {
        this.taskList = Ext.create({
            xtype: 'panel',
            region: 'center',
            bodyPadding: 0,
            items: [{
                xtype: 'taskList',
            }]
        });

        return this.taskList;
    },

    createTaskForm: function()
    {
        this.taskForm = Ext.create({
            xtype: 'taskForm',
            region: 'east',
            width: 320,
            minWidth: 300,
            maxWidth: 400,
            hidden: true,
        });

        return this.taskForm;
    }
});
