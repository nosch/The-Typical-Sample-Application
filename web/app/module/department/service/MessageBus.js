/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Department.service.MessageBus
 *
 * Message bus for the Department modul
 */

Ext.define('Department.service.MessageBus', {
    requires: [
        'Company.service.MessageBus'
    ],

    mixins: {
        observable: 'Ext.util.Observable'
    },

    singleton: true,

    masterMessageBus: null,

    constructor: function(config) {
        var me = this;

        me.mixins.observable.constructor.call(me, config);

        me.masterMessageBus = Company.service.MessageBus;
    }
});
