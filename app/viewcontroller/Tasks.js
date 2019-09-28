Ext.define('ExamplesExtJS.viewcontroller.Tasks', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tasks',

    onAddTask: function()
    {
        this.showTaskForm(null);
        this.getTaskGrig().getSelectionModel().deselectAll();
    },

    onCompleteTask: function()
    {
        var store = this.getStoreTasks(),
            taskGrid = this.getTaskGrig(),
            selectionModel = taskGrid.getSelectionModel();

        selectionModel.getSelection().forEach(function(v) {
            v.set('status', 'completed');
            store.add(v);
        });
        store.sync();

        selectionModel.deselectAll();
    },

    onRemoveTask: function(btn)
    {
        var store = this.getStoreTasks();
        var task  = btn.getWidgetRecord();

        var msgText = Ext.util.Format.htmlEncode(
            Ext.String.format(
                "Do you really want to delete task '{0}'?",
                task.get('title')
            )
        );

        Ext.Msg.confirm(
            "Confirmation",
            msgText,
            function (button)
            {
                if (button !== "yes")
                    return;
                store.remove(task);
                store.sync();
            }
        );
    },

    onTaskSave: function()
    {
        var taskForm = this.getTaskForm();
        var form     = taskForm.getForm();
        var store    = this.getStoreTasks();

        if (! form.isValid())
            return;

        if (this.editRecord)
            taskForm.updateRecord(this.editRecord);
        else
        {
            var formData = form.getValues();

            store.add({
                title:  formData.title,
                desc:   formData.desc,
                status: 'active',
                created_at: new Date(),
            });

            taskForm.reset();
            taskForm.hide();
        }

        store.sync();
    },

    onTaskCancel: function()
    {
        var taskForm = this.getTaskForm();

        taskForm.reset();
        taskForm.hide();
    },

    onItemSelected: function(model, record)
    {
        this.showTaskForm(record);
    },

    onFilterSearchKeyup: function()
    {
        var store = this.getStoreTasks(),
            searchVal = Ext.String.trim(
                this.lookupReference('taskFilterSearch').value
            );

        if (searchVal)
            store.filter('title', new RegExp(searchVal, "g"));
        else
            store.removeFilter('title');
    },

    onFilterStatus: function()
    {
        var store  = this.getStoreTasks(),
            status = this.lookupReference('taskFilterStatus').value;

        if (status !== 'all')
            store.filter('status', status);
        else
            store.removeFilter('status');
    },

    rendererTaskStatus: function()
    {
        console.log('ok');
        return 'sd';
    },

    getStoreTasks: function()
    {
        return this.getStore('tasks');
    },

    getTaskForm: function()
    {
        return this.lookupReference('taskForm');
    },

    getTaskGrig: function()
    {
        return this.lookupReference('taskGrid');
    },

    showTaskForm: function(record)
    {
        var taskForm = this.getTaskForm();

        this.editRecord = record;

        if (! record)
        {
            taskForm.reset();
            taskForm.setTitle('Add task');
        }
        else
        {
            taskForm.setTitle(
                'Edit: '+ Ext.util.Format.htmlEncode(record.get('title'))
            );
            taskForm.getForm().setValues(record.data);
        }

        taskForm.show();
    }
});