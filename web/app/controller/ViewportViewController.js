/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.controller.ViewportViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the status bar view component of the default module
 */

Ext.define('Company.controller.ViewportViewController', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Company.service.MessageBus'
    ],

    mixins: [
        'Deft.mixin.Injectable'
    ],

    control: {
        centerPanel: true
    },

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
        var centerPanel = me.getCenterPanel();
        var activeModule = centerPanel.child();

        if (activeModule) {
            activeModule.destroy();
        }

        centerPanel.add({
            xtype: args.module + '.grid'
        });

        view.doLayout();

        var eventArgs = {
            message: Ext.String.format('Active module: {0}', Ext.String.capitalize(args.module))
        };

        me.messageBus.fireEvent('companyStatusbarUpdate', eventArgs);
    }
});
