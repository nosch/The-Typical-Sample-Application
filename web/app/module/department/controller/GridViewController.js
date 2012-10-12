/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Department.controller.GridViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the grid view component of the department module
 */

Ext.define('Department.controller.GridViewController', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Department.service.MessageBus'
    ],

    mixins: [
        'Deft.mixin.Injectable'
    ],

    config: {
        selectionModel: null
    },

    messageBus: null,

    init: function() {
        var me = this;

        me.setSelectionModel(me.getView().getSelectionModel());

        me.messageBus = Department.service.MessageBus;
    }
});
