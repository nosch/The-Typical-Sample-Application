/**
 * Definiton and configuration of the Ext JS application
 *
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 */

Ext.Loader.setConfig({
    modules: [
        'department',
        'employee'
    ],
    paths: {
        'Deft': './lib/DeftJs/src/js/Deft',
        'Department': './app/module/department',
        'Employee': './app/module/employee'
    }
});

Ext.Loader.require([
    'Deft.ioc.Injector',
    'Deft.mixin.Injectable',
    'Deft.mixin.Controllable'
]);

Ext.application({
    name: 'Company',

    autoCreateViewport: true,

    init: function() {
        var me = this;

        Deft.Injector.configure({
            moduleRegistry: 'Company.service.ModuleRegistry',
            messageBus: 'Company.service.MessageBus',
            employeeStore: 'Employee.store.Store',
            departmentStore: 'Department.store.Store'
        });
    }
});
