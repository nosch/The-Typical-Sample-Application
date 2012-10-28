/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.controller.CenterpanelViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the status bar view component of the default module
 */

Ext.define('Company.controller.CenterpanelViewController', {
    extend: 'Deft.mvc.ViewController',

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

    changeModule: function(moduleName) {
        var me = this;
        var view = me.getView();

        view.removeAll();

        Ext.Loader.require(
            me.moduleConfig[moduleName].requires,
            function() {
                if (me.moduleConfig[moduleName].injection) {
                    Deft.Injector.configure(
                        me.moduleConfig[moduleName].injection
                    );
                }

                var moduleViewComponent = Ext.create(me.moduleConfig[moduleName].view);

                view.add(moduleViewComponent);
            }
        );
    }
});
