/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.view.Viewport
 * @extends Ext.container.Viewport
 *
 * Viewport container of the application (default module)
 */

Ext.define('Company.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.Border',
        'Company.view.Toolbar',
        'Company.view.Statusbar',
        'Employee.view.Grid'
    ],

    mixins: [
        'Deft.mixin.Controllable'
    ],

    controller: 'Company.controller.ViewportViewController',

    layout: 'border',

    style: {
        backgroundColor: 'white'
    },

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'panel',
                itemId: 'northPanel',
                region: 'north',
                border: 1,
                margins: 1,
                height: 87,
                html: '<h1><img src=\'resource/image/company-group-logo.jpg\' /></h1>',
                dockedItems: [{
                    xtype: 'company.toolbar',
                    itemId: 'mainToolbar',
                    dock: 'top'
                }]
            }, {
                xtype: 'panel',
                itemId: 'westPanel',
                html: '<p style="padding:10px;">I am a useless view component...</p>',
                region: 'west',
                width: 200,
                // layout: 'fit', // bug, not possible with collapsible: true
                collapsible: true,
                collapsed: true,
                border: 1,
                margins: '0 1 1 1'
            }, {
                xtype: 'panel',
                itemId: 'centerPanel',
                region: 'center',
                layout: 'fit',
                border: 1,
                margins: '0 1 1 0',
                items: [{
                    xtype: 'employee.grid',
                    itemId: 'employeeGrid',
                    border: 0
                }]
            }, {
                xtype: 'panel',
                itemId: 'southPanel',
                region: 'south',
                border: 1,
                margins: '0 1 1 1',
                dockedItems: [{
                    xtype: 'company.statusbar',
                    itemId: 'statusBar',
                    dock: 'top'
                }]
            }]
        });

        me.callParent(arguments);
    }
});
