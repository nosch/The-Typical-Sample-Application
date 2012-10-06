/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.controller.StatusbarViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the status bar view component of the default module
 */

Ext.define('Company.controller.StatusbarViewController', {
    extend: 'Deft.mvc.ViewController',

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: {
        messageBus: 'messageBus'
    },

    control: {
        statusField: true
    },

    messageBus: null,

    init: function() {
        var me = this;

        me.messageBus.on({
            companyStatusbarUpdate: {
                fn: me.updateStatusMessage,
                scope: me
            }
        });
    },

    updateStatusMessage: function(message) {
        var me = this;
        var statusField = me.getStatusField();

        statusField.setText(message);
    }

    /* Update status message with data
    updateStatusMessage: function(template, record) {
        var me = this;
        var statusField = me.getStatusField();

        statusField.setText(template.apply({
            employeeId: record.data.id
        }));
    }

    First param template = Ext.create('Ext.XTemplate', 'Status: Employee #{employeeId} deleted')
    Second param record = selected record from grid
    */
});
