/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.controller.ToolbarViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the status bar view component of the default module
 */

Ext.define('Company.controller.ToolbarViewController', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Company.service.MessageBus'
    ],

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: [
        'moduleConfig',
        'messageBus'
    ],

    control: {
        helpButton: {
            click: 'onHelpButtonClick'
        },
        loginButton: {
            click: 'onLoginButtonClick'
        }
    },

    moduleConfig: null,

    messageBus: null,

    init: function() {
        var me = this;
        var view = me.getView();
        var position = 0;

        Ext.Object.each(me.moduleConfig, function(key, value) {
            if (!value.active) {
                return;
            }

            view.insert(position, {
                xtype: 'button',
                text: value.title,
                listeners: {
                    click: me.onModuleButtonClick,
                    scope: me
                },
                module: key
            });

            position ++;
        });
    },

    onModuleButtonClick: function(button) {
        var me = this;

        me.messageBus.fireEvent('companyModuleChange', button.module);
    },

    onHelpButtonClick: function(button) {
        var me = this;

        me._showInfoMessage();
    },

    onLoginButtonClick: function(button) {
        var me = this;

        me._showInfoMessage();
    },

    _showInfoMessage: function() {
        Ext.MessageBox.show({
            title: 'Info',
            msg: 'Not implemented yet.',
            icon: Ext.MessageBox.INFO,
            buttons: Ext.Msg.OK
        });
    }
});
