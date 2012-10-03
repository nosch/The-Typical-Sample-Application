/**
 * Definiton and configuration of the Ext JS application
 *
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 */

Ext.Loader.setPath({
    'Deft': './lib/DeftJs/src/js/Deft',
    'Employee': './app/module/employee'
});

Ext.Loader.require([
    'Deft.ioc.Injector',
    'Deft.mixin.Injectable',
    'Deft.mixin.Controllable'
]);

Ext.application({
    name: 'Company',

    appFolder: 'app',

    autoCreateViewport: true,

    init: function() {
        var me = this;

        Deft.Injector.configure({
            messageBus: 'Company.service.MessageBus',
            employeeStore: 'Employee.store.EmployeeStore',
            employeeViewTitle: {
                value: 'Employees'
            }
        });
    }
});
