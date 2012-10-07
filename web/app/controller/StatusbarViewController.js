/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.controller.StatusbarViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the status bar view component of the default module
 */

Ext.define('Company.controller.StatusbarViewController', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Company.service.MessageBus'
    ],

    mixins: [
        'Deft.mixin.Injectable'
    ],

    control: {
        statusField: true
    },

    messageBus: null,

    init: function() {
        var me = this;

        me.messageBus = Company.service.MessageBus;

        me.messageBus.on({
            companyStatusbarUpdate: {
                fn: me.updateStatusMessage,
                scope: me
            }
        });
    },

    updateStatusMessage: function(args) {
        var me = this;
        var statusField = me.getStatusField();

        statusField.setText(args.message);
    }

    /* Update status message with record.data
    updateStatusMessage: function(args) {
        var me = this;
        var statusField = me.getStatusField();

        statusField.setText(args.template.apply({
            employeeId: args.record.data.id
        }));
    }

    args.template = Ext.create('Ext.XTemplate', 'Status: Employee #{employeeId} deleted')
    args.record = selected record from grid
    */
});
