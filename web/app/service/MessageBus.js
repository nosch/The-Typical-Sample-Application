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

        me.addEvents({
            companyStatusbarUpdate: true,
            employeeContextmenuInsertclick: true,
            employeeContextmenuEditclick: true,
            employeeContextmenuDeleteclick: true
        });

        me.callParent(arguments);
    }
});
