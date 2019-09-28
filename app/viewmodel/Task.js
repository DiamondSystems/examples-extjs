Ext.define('ExamplesExtJS.viewmodel.Task', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.task',

    stores: {
        tasks: {
            type: 'tasks',
            autoLoad: true
        }
    },

    formulas: {
        task: {
            bind: {
                bindTo: '{taskGrid.selection}',
                deep: true
            },
            get: function (record)
            {
                return record;
            },
            set: function (record)
            {
                if (! record.isModel)
                {
                    record = this.get('tasks').getById(record.id);
                    this.set('task', record);
                }
            }
        }
    }
});