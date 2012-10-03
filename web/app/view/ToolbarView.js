/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.view.ToolbarView
 * @extends Ext.toolbar.Toolbar
 *
 * View component for the main toolbar of default module
 */

Ext.define( 'Company.view.ToolbarView', {
    extend: 'Ext.toolbar.Toolbar',

    requires: [
        'Ext.button.Split',
        'Ext.toolbar.TextItem'
    ],

    xtype: 'toolbarview',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            itemId: 'mainToolbar',
            dock: 'top',
            items: [{
                xtype: 'button',
                itemId: 'dashboardButton',
                text: 'Dashboard',
                href: '#dashboard',
                hrefTarget: '_self'
            }, {
                xtype: 'button',
                itemId: 'employeeButton',
                text: 'Employees',
                href: '#employee',
                hrefTarget: '_self'
            }, {
                xtype: 'button',
                itemId: 'partnerButton',
                text: 'Partners',
                href: '#partner',
                hrefTarget: '_self'
            }, {
                xtype: 'button',
                itemId: 'helpButton',
                text: 'Help',
                href: '#help',
                hrefTarget: '_self'
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
