/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.controller.ContextMenuViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the context menu view component of the employee module
 */

Ext.define('Employee.controller.ContextMenuViewController', {
    extend: 'Deft.mvc.ViewController',

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: {
        messageBus: 'messageBus'
    },

    control: {
        insertItem: {
            click: 'onInsertClick'
        },
        deleteItem: {
            click: 'onDeleteClick'
        }
    },

    messageBus: null,

    onInsertClick: function(menuItem) {
        var me = this;

        me.messageBus.fireEvent(
            'employeeContextmenuInsertclick'
        );
    },

    onDeleteClick: function(menuItem) {
        var me = this;
        var record = me.getView().getRecord();

        me.messageBus.fireEvent(
            'employeeContextmenuDeleteclick',
            record
        );
    }
});
