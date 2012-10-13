/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.Config
 *
 * Configuration class for the "Employee" module
 */

Ext.define('Employee.Config', {
    moduleConfig: {
        employee: {
            title: 'Employees',
            description: 'Mangage the employees of your entire company.',
            view: 'Employee.view.Grid',
            xtype: 'employee.grid',
            active: true
        }
    },

    getModuleConfig: function() {
        var me = this;

        return me.moduleConfig;
    }
});
