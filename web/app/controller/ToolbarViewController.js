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
        'messageBus'
    ],

    control: {
        dashboardButton: {
            click: 'changeModule'
        },
        employeeButton: {
            click: 'changeModule'
        },
        departmentButton: {
            click: 'changeModule'
        },
        helpButton: {
            click: 'showHelpScreen'
        },
        loginButton: {
            click: 'showLoginScreen'
        }
    },

    messageBus: null,

    init: function() {
        var me = this;
    },

    changeModule: function(button) {
        var me = this;

        if ('dashboard' === button.module) {
            me._showInfoMessage();
            return;
        }

        var eventArgs = {
            module: button.module
        };

        me.messageBus.fireEvent('companyModuleChange', eventArgs);
    },

    showHelpScreen: function(button) {
        var me = this;

        me._showInfoMessage();
    },

    showLoginScreen: function(button) {
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
