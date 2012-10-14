/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Department.Config
 * @extends Company.service.ModuleConfig
 *
 * Configuration class for the "Department" module
 */

Ext.define('Department.Config', {
    extend: 'Company.service.ModuleConfig',

    moduleConfig: {
        department: {
            title: 'Departments',
            description: 'Mangage the departments of your entire company.',
            view: 'Department.view.Grid',
            xtype: 'department.grid',
            active: true
        }
    }
});
