/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.view.Grid
 * @extends Ext.grid.Panel
 *
 * Grid view component of the employee module
 */

Ext.define('Employee.view.Grid', {
    extend: 'Ext.grid.Panel',

    requires: [
        'Ext.grid.column.Template',
        'Ext.grid.column.Date',
        'Ext.grid.column.Boolean',
        'Ext.form.field.Checkbox',
        'Employee.view.ContextMenu'
    ],

    mixins: [
        'Deft.mixin.Injectable',
        'Deft.mixin.Controllable'
    ],

    inject: {
        store: 'employeeStore'
    },

    config: {
        contextMenu: null
    },

    controller: 'Employee.controller.GridViewController',

    xtype: 'employee.grid',

    title: 'Employees',

    columns: {
        defaults: {
            flex: 0.5
        },
        items: [{
            text: 'ID',
            dataIndex: 'id',
            flex: 0.1
        }, {
            text: 'Name',
            xtype: 'templatecolumn',
            tpl: '{lastName}, {firstName}'
        }, {
            text: 'DOB',
            xtype: 'datecolumn',
            format: 'M d, Y',
            dataIndex: 'dob'
        }, {
            text: 'Department',
            dataIndex: 'department'
        }, {
            text: 'Residence',
            xtype: 'templatecolumn',
            tpl: '{city}, {state}'
        }, {
            text: 'Hired',
            xtype: 'datecolumn',
            format: 'M d, Y',
            dataIndex: 'dateHired'
        }, {
            text: 'Active',
            xtype: 'booleancolumn',
            trueText: 'Yes',
            falseText: 'No',
            dataIndex: 'active',
            flex: 0.1
        }]
    },

    initComponent: function() {
        var me = this;

        me.setContextMenu(Ext.create('Employee.view.ContextMenu'));

        me.callParent(arguments);
    }
});
