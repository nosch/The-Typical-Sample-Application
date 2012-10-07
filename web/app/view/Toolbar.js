/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.view.Toolbar
 * @extends Ext.toolbar.Toolbar
 *
 * View component for the main toolbar of default module
 */

Ext.define( 'Company.view.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',

    requires: [
        'Ext.button.Split',
        'Ext.toolbar.TextItem'
    ],

    mixins: [
        'Deft.mixin.Controllable'
    ],

    controller: 'Company.controller.ToolbarViewController',

    xtype: 'company.toolbar',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'button',
                itemId: 'dashboardButton',
                text: 'Dashboard',
                module: 'dashboard'
            }, {
                xtype: 'button',
                itemId: 'employeeButton',
                text: 'Employees',
                module: 'employee'
            }, {
                xtype: 'button',
                itemId: 'departmentButton',
                text: 'Departments',
                module: 'department'
            }, {
                xtype: 'button',
                itemId: 'helpButton',
                text: 'Help'
            }, {
                xtype: 'tbfill'
            }, {
                xtype: 'tbtext',
                text: 'You are logged in as: Admin'
            }, {
                xtype: 'tbseparator'
            }, {
                xtype: 'button',
                itemId: 'loginButton',
                text: 'Logout'
            }]
        });

        me.callParent(arguments);
    }
});
