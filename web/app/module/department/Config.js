/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Department.Config
 *
 * Configuration class for the "Department" module
 */

Ext.define('Department.Config', {
    moduleConfig: {
        department: {
            title: 'Departments',
            description: 'Mangage the departments of your entire company.',
            view: 'Department.view.Grid',
            xtype: 'department.grid',
            active: true
        }
    },

    getModuleConfig: function() {
        var me = this;

        return me.moduleConfig;
    }
});
