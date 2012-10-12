/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.view.Statusbar
 * @extends Ext.toolbar.Toolbar
 *
 * View component for the main statusbar of the default module
 */

Ext.define( 'Company.view.Statusbar', {
    extend: 'Ext.toolbar.Toolbar',

    mixins: [
        'Deft.mixin.Controllable'
    ],

    controller: 'Company.controller.StatusbarViewController',

    xtype: 'company.statusbar',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
            items: [{
                xtype: 'tbtext',
                itemId: 'statusField',
                text: 'Status: Loading ...'
            }, {
                xtype: 'tbfill'
            }, {
                xtype: 'button',
                itemId: 'aboutButton',
                text: 'About'
            }, {
                xtype: 'tbseparator'
            }, {
                xtype: 'tbtext',
                text: '© 2012 Company Group'
            }]
        });

        me.callParent(arguments);
    }
});
