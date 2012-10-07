/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.service.MessageBus
 *
 * Message bus for the Employee modul
 */

Ext.define('Employee.service.MessageBus', {
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

        /**
         * List of events this message bus may fire
         * Just for the purpose of documentation
         * This not a registration of events
         */
        me.addEvents(
            'contextmenuInsertclick',
            'contextmenuEditclick',
            'contextmenuDeleteclick',
            'createEmployee',
            'updateEmployee',
            'deleteEmployee'
        );

        /**
         * Add event listener and handler
         * Listening to events that have to bubble up
         * Fire these events to the master message bus via this.bubbleEvent()
         */
        me.on({
            createEmployee: {
                fn: Ext.Function.bind(me.bubbleEvent, me, ['companyStatusbarUpdate'], 0),
                scope: me
            },
            updateEmployee: {
                fn: Ext.Function.bind(me.bubbleEvent, me, ['companyStatusbarUpdate'], 0),
                scope: me
            },
            deleteEmployee: {
                fn: Ext.Function.bind(me.bubbleEvent, me, ['companyStatusbarUpdate'], 0),
                scope: me
            }
        });

        me.callParent(arguments);
    },

    bubbleEvent: function(eventName, args) {
        var me = this;

        me.masterMessageBus.fireEvent(eventName, args);
    }
});
