/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.controller.ToolbarViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the status bar view component of the default module
 */

Ext.define('Company.controller.ToolbarViewController', {
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
    }
});
