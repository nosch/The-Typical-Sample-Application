/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.service.MessageBus
 *
 * Message bus for the entire Company application
 */

Ext.define('Company.service.MessageBus', {
    singleton: true,

    mixins: {
        observable: 'Ext.util.Observable'
    },

    constructor : function (config) {
        var me = this;

        me.mixins.observable.constructor.call(me, config);

        me.addEvents(
            'company.statusbar.update'
        );

        me.callParent(arguments);
    }
});
