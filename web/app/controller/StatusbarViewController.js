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

    config: {
         messageBus: null
    },

    control: {
        statusField: true
    },

    init: function() {
        var me = this;

        me.getMessageBus().on(
            'statusbar.update',
            me.updateStatusMessage,
            me
        );
    },

    updateStatusMessage: function(template, record) {
        var me = this;
        var statusField = me.getStatusField();

        statusField.setText(template.apply({
            employeeId: record.data.id
        }));
    }
});
