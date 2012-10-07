/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.controller.GridViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the grid view component of the employee module
 */

Ext.define('Employee.controller.GridViewController', {
    extend: 'Deft.mvc.ViewController',

    requires: [
        'Employee.service.MessageBus'
    ],

    config: {
        selectionModel: null
    },

    control: {
        view: {
            itemcontextmenu: 'showContextMenu'
        }
    },

    messageBus: null,

    init: function() {
        var me = this;

        me.setSelectionModel(me.getView().getSelectionModel());

        me.messageBus = Employee.service.MessageBus;

        me.messageBus.on({
            contextmenuInsertclick: {
                fn: me.insertItem,
                scope: me
            },
            contextmenuEditclick: {
                fn: me.editItem,
                scope: me
            },
            contextmenuDeleteclick: {
                fn: me.deleteItem,
                scope: me
            }
        });
    },

    showContextMenu: function(grid, record, item, index, event) {
        var me = this;
        var view = me.getView();

        event.stopEvent();

        view.getContextMenu().showAt(event.getXY());
    },

    insertItem: function() {
        var me = this;

        /**
         * @todo (1) Implement insert procedure
         *       (2) If insert was successfull, fire event (store proxy listener)
         */

        var eventArgs = {
            message: 'Action: New employee added'
        };

        me.messageBus.fireEvent('createEmployee', eventArgs);
    },

    editItem: function() {
        var me = this;
        var record = me.getSelectionModel().getLastSelected();

        /**
         * @todo (1) Implement edit procedure
         *       (2) If edit was successfull, fire event (store proxy listener)
         */

        var eventArgs = {
            message: Ext.String.format('Action: Employee #{0} edited', record.data.id)
        };

        me.messageBus.fireEvent('updateEmployee', eventArgs);
    },

    deleteItem: function() {
        var me = this;
        var view = me.getView();
        var record = me.getSelectionModel().getLastSelected();

        view.getStore().remove(record);

        /** @todo If remove was successfull, fire event (store proxy listener) */

        var eventArgs = {
            message: Ext.String.format('Action: Employee #{0} deleted', record.data.id)
        };

        me.messageBus.fireEvent('deleteEmployee', eventArgs);
    }
});
