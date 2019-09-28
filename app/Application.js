Ext.define('ExamplesExtJS.Application', {
    extend: 'Ext.app.Application',
    name: 'ExamplesExtJS',

    requires: [
        'ExamplesExtJS.view.tasks.Tasks'
    ],
    mainView: 'ExamplesExtJS.view.tasks.Tasks'

    // quickTips: false,
    // platformConfig: {
    //     desktop: {
    //         quickTips: true
    //     }
    // },
});
