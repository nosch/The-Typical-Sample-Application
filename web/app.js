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
    requires: [
        'Company.service.ModuleRegistry'
    ],

    name: 'Company',

    moduleRegistry: null,

    autoCreateViewport: true,

    init: function() {
        var me = this;

        me.moduleRegistry = Company.service.ModuleRegistry.getRegistry();

        // nosch: debug output
        console.debug(me.moduleRegistry);

        Deft.Injector.configure({
            messageBus: 'Company.service.MessageBus',
            employeeStore: 'Employee.store.Store',
            departmentStore: 'Department.store.Store'
        });
    }
});
