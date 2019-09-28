Ext.define('ExamplesExtJS.store.TaskLocalStore', {
    extend: 'Ext.data.Store',
    alias: 'store.tasks',

    model: "ExamplesExtJS.model.Task",

    proxy: {
        type: 'localstorage',
        id: 'ExamplesExtJSTaskLocalStore',
    },
    autoLoad: true,
    storeId: 'tasks',
});
