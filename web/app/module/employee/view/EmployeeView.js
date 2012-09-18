/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.view.EmployeeView
 * @extends Ext.panel.Panel
 *
 * Main view component of the employee module
 */


Ext.define('Employee.view.EmployeeView', {
    extend: 'Ext.panel.Panel',

    mixins: [
        'Deft.mixin.Controllable'
    ],

    controller: 'Employee.controller.EmployeeViewController',

    xtype: 'employeeview',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            html: '<p style="padding: 4px;">Employee data ...</p>'
        });

        me.callParent(arguments);
    }
});
