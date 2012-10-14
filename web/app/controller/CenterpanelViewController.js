/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.controller.CenterpanelViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the status bar view component of the default module
 */

Ext.define('Company.controller.CenterpanelViewController', {
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

    moduleConfig: null,

    messageBus: null,

    init: function() {
        var me = this;

        me.messageBus.on({
            companyModuleChange: {
                fn: me.changeModule,
                scope: me
            }
        });
    },

    changeModule: function(module) {
        var me = this;
        var view = me.getView();

        view.removeAll();

        Ext.Loader.require(
            me.moduleConfig[module].view,
            function() {
               view.add({
                    xtype: me.moduleConfig[module].xtype
                });
            }
        );

        var eventArgs = {
            message: Ext.String.format('Active module: {0}', me.moduleConfig[module].title)
        };

        me.messageBus.fireEvent('companyStatusbarUpdate', eventArgs);
    }
});
