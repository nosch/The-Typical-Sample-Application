/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.view.EmployeeGridView
 * @extends Ext.grid.Panel
 *
 * Grid view component of the employee module
 */


Ext.define('Employee.view.EmployeeGridView', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Template',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean'
    ],

    mixins: [
        'Deft.mixin.Injectable',
        'Deft.mixin.Controllable'
    ],

    inject: {
        store: 'employeeStore'
    },

    controller: 'Employee.controller.EmployeeGridViewController',

    xtype: 'employeegridview',

    columns: {
        defaults: {
            flex: 1
        },
        items: [{
            text: 'ID',
            dataIndex: 'id',
            flex: 0.2
        }, {
            text: 'Name',
            xtype: 'templatecolumn',
            tpl: '{lastName}, {firstName}',
            flex: 0.6
        }, {
            text: 'Department',
            dataIndex: 'department',
            flex: 0.4
        }, {
            text: 'Address',
            xtype: 'templatecolumn',
            tpl: '{street}, {zip} {city}, {state}'
        }, {
            text: 'Hired',
            xtype: 'datecolumn',
            format: 'Y-m-d',
            dataIndex: 'dateHired',
            flex: 0.4
        }, {
            text: 'Active',
            xtype: 'booleancolumn',
            trueText: 'Yes',
            falseText: 'No',
            dataIndex: 'active',
            flex: 0.2
        }]
    },

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            html: '<p style="padding: 4px;">Employee data ...</p>'
        });

        me.callParent(arguments);
    }
});
