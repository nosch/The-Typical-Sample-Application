/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.controller.GridViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the grid view component of the employee module
 */

Ext.define('Employee.controller.GridViewController', {
    extend: 'Deft.mvc.ViewController',

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: {
        messageBus: 'messageBus',
        employeeStore: 'employeeStore'
    },

    config: {
        contextMenu: null,
        employeeStore: null
    },

    control: {
        view: {
            itemcontextmenu: 'showContextMenu'
        }
    },

    messageBus: null,

    init: function() {
        var me = this;

        me.messageBus.on({
            employeeContextmenuInsertclick: {
                fn: me.insertItem,
                scope: me
            },
            employeeContextmenuEditclick: {
                fn: me.editItem,
                scope: me
            },
            employeeContextmenuDeleteclick: {
                fn: me.deleteItem,
                scope: me
            }
        });
    },

    showContextMenu: function(grid, record, item, index, event) {
        var me = this;
        var view = me.getView();

        event.stopEvent();

        view.getContextMenu().setRecord(record);
        view.getContextMenu().showAt(event.getXY());
    },

    insertItem: function() {
        var me = this;

        me.messageBus.fireEvent(
            'companyStatusbarUpdate',
            'Action: New employee added'
        );
    },

    editItem: function(record) {
        var me = this;

        me.messageBus.fireEvent(
            'companyStatusbarUpdate',
            Ext.String.format(
                'Action: Employee #{0} edited',
                record.data.id
            )
        );
    },

    deleteItem: function(record) {
        var me = this;

        me.getEmployeeStore().remove(record);

        me.messageBus.fireEvent(
            'companyStatusbarUpdate',
            Ext.String.format(
                'Action: Employee #{0} deleted',
                record.data.id
            )
        );
    }
});
