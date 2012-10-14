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
        // Library namespaces
        'Deft': './lib/DeftJs/src/js/Deft',
        // Module namespaces
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
    requires: [
        'Company.service.ModuleRegistry'
    ],

    name: 'Company',

    autoCreateViewport: true,

    init: function() {
        var me = this;

        Deft.Injector.configure({
            moduleConfig: {
                value: Company.service.ModuleRegistry.getModuleConfig()
            },
            messageBus: 'Company.service.MessageBus',
            employeeStore: 'Employee.store.Store',
            departmentStore: 'Department.store.Store'
        });
    }
});
