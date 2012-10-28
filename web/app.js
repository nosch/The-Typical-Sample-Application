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
        // Module namespace (module root directory)
        'module': './app/module/'
        // Namespace for each module is set by registry process
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

        var moduleRegistry = Company.service.ModuleRegistry.getRegistry();

        Deft.Injector.configure({
            moduleConfig: {
                value: moduleRegistry
            },
            messageBus: 'Company.service.MessageBus',
            employeeStore: 'Employee.store.Store',
            departmentStore: 'Department.store.Store'
        });
    }
});
