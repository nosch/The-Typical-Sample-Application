/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.view.StatusbarView
 * @extends Ext.toolbar.Toolbar
 *
 * View component for the main statusbar of the default module
 */

Ext.define( 'Company.view.StatusbarView', {
    extend: 'Ext.toolbar.Toolbar',

    requires: [

    ],

    mixins: [
        'Deft.mixin.Injectable',
        'Deft.mixin.Controllable'
    ],

    inject: {

    },

    controller: 'Company.controller.StatusbarViewController',

    xtype: 'statusbarview',

    initComponent: function() {
        var me = this;

        Ext.apply(me, {
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
        });

        me.callParent(arguments);
    }
});
