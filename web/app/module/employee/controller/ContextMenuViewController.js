/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.controller.ContextMenuViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the context menu view component of the employee module
 */

Ext.define('Employee.controller.ContextMenuViewController', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Employee.service.MessageBus'
    ],

    mixins: [
        'Deft.mixin.Injectable'
    ],

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

    init: function() {
        var me = this;

        me.messageBus = Employee.service.MessageBus;
    },

    onInsertClick: function(menuItem) {
        var me = this;

        me.messageBus.fireEvent('contextmenuInsertclick');
    },

    onEditClick: function(menuItem) {
        var me = this;

        me.messageBus.fireEvent('contextmenuEditclick');
    },

    onDeleteClick: function(menuItem) {
        var me = this;

        Ext.MessageBox.confirm(
            'Confirm delete',
            'Do you really want to remove the selected record?',
            function(button) {
                if (button == 'yes') {
                    me.messageBus.fireEvent('contextmenuDeleteclick');
                }
            }
        );
    }
});
