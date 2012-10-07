/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Department.view.Grid
 * @extends Ext.grid.Panel
 *
 * Grid view component of the department module
 */

Ext.define('Department.view.Grid', {
    extend: 'Ext.grid.Panel',

    mixins: [
        'Deft.mixin.Injectable',
        'Deft.mixin.Controllable'
    ],

    inject: {
        store: 'departmentStore'
    },

    controller: 'Department.controller.GridViewController',

    xtype: 'department.grid',

    title: 'Departments',

    columns: {
        defaults: {
            flex: 1
        },
        items: [{
            text: 'ID',
            dataIndex: 'id',
            flex: 0.1
        }, {
            text: 'Name',
            dataIndex: 'name',
            flex: 0.5
        }, {
            text: 'Head',
            dataIndex: 'head'
        }]
    },

    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    }
});
