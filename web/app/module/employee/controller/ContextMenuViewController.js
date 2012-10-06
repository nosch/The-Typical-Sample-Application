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
        editItem: {
            click: 'onEditClick'
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

    onEditClick: function(menuItem) {
        var me = this;
        var record = me.getView().getRecord();

        me.messageBus.fireEvent(
            'employeeContextmenuEditclick',
            record
        );
    },

    onDeleteClick: function(menuItem) {
        var me = this;
        var record = me.getView().getRecord();

        Ext.MessageBox.confirm(
            'Confirm delete',
            'Do you really want to remove the selected record?',
            function(button) {
                if (button == 'yes') {
                    me.messageBus.fireEvent(
                        'employeeContextmenuDeleteclick',
                        record
                    );
                }
            }
        );
    }
});
