/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.Config
 * @extends Company.service.ModuleConfig
 *
 * Configuration class for the "Employee" module
 */

Ext.define('Employee.Config', {
    extend: 'Company.service.ModuleConfig',

    moduleConfig: {
        active: true,
        title: 'Employees',
        description: 'Mangage the employees of your entire company.',
        view: 'Employee.view.Grid',
        xtype: 'employee.grid',
        requires: [
            'Employee.view.Grid'
        ]
    }
});
