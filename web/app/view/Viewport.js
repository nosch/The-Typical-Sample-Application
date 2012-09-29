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
        'Company.view.ToolbarView',
        'Employee.view.EmployeeGridView'
    ],

    layout: 'border',

    style: {
        backgroundColor: 'white'
    },

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'panel',
                region: 'north',
                itemId: 'northPanel',
                border: 1,
                margins: 1,
                height: 87,
                html: '<h1><img src=\'resource/image/company-group-logo.jpg\' /></h1>',
                dockedItems: [{
                    xtype: 'toolbarview'
                }]
            }, {
                xtype: 'panel',
                region: 'west',
                itemId: 'westPanel',
                width: 200,
                // layout: 'fit', // bug, not possible with collapsible: true
                collapsible: true,
                border: 1,
                margins: '0 1 1 1'
            }, {
                xtype: 'panel',
                region: 'center',
                itemId: 'centerPanel',
                layout: 'fit',
                border: 1,
                margins: '0 1 1 0',
                items: [{
                    xtype: 'employeegridview',
                    border: 0
                }]
            }, {
                xtype: 'panel',
                region: 'south',
                itemId: 'southPanel',
                border: 1,
                margins: '0 1 1 1',
                dockedItems: [{
                    xtype: 'toolbar',
                    itemId: 'statusBar',
                    dock: 'top',
                    items: [{
                        xtype: 'tbtext',
                        text: 'Loading ...'
                    }, {
                        xtype: 'tbfill'
                    }, {
                        xtype: 'button',
                        text: 'Version'
                    }, {
                        xtype: 'tbseparator'
                    }, {
                        xtype: 'tbtext',
                        text: '© 2012 Company Group'
                    }]
                }]
            }]
        });

        me.callParent(arguments);
    }
});
