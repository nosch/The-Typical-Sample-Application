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

    messageBus: null,

    init: function() {
        var me = this;

        me.messageBus = Company.service.MessageBus;

        me.messageBus.on({
            companyModuleChange: {
                fn: me.changeModule,
                scope: me
            }
        });
    },

    changeModule: function(args) {
        var me = this;
        var view = me.getView();

        view.removeAll();

        view.add({
            xtype: args.module + '.grid'
        });

        var eventArgs = {
            message: Ext.String.format('Active module: {0}', Ext.String.capitalize(args.module))
        };

        me.messageBus.fireEvent('companyStatusbarUpdate', eventArgs);
    }
});
