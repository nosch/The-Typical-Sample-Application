/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.controller.EmployeeGridViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the grid view component of the employee module
 */

Ext.define('Employee.controller.EmployeeGridViewController', {
    extend: 'Deft.mvc.ViewController',

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: {
        messageBus: 'messageBus',
        viewTitle: 'employeeViewTitle'
    },

    config: {
        messageBus: null,
        viewTitle: null
    },

    control: {
        view: {
            select: 'onSelectEmployee',
            itemcontextmenu: 'renderRowContextMenu'
        }
    },

    init: function() {
        var me = this;
        var view = me.getView();
        var viewTitle = me.getViewTitle();

        view.setTitle(viewTitle);
    },

    onSelectEmployee: function(selectionModel, record, index, options) {
        var me = this;

        me.getMessageBus().fireEvent(
            'statusbar.update',
            Ext.create('Ext.XTemplate', 'Selection: Employee #{employeeId}'),
            record
        );
    },

    renderRowContextMenu: function(view, record, item, index, e) {
        e.stopEvent();

        if (!view.rowContextMenu) {
            view.rowContextMenu = Ext.create('Ext.menu.Menu', {
                items : [{
                    text: 'Insert record',
                    handler: function() {
                        Ext.MessageBox.show({
                            title: 'Info',
                            msg: 'Not implemented yet.',
                            icon: Ext.MessageBox.INFO,
                            buttons: Ext.Msg.OK
                        });
                    }
                }, {
                    text : 'Delete record...',
                    handler: function() {
                        var store = view.getStore();
                        var selected = view.selModel.getSelection();

                        Ext.MessageBox.confirm(
                            'Confirm delete',
                            'Do you really want to remove the selected record?',
                            function(button) {
                                if (button == 'yes') {
                                    console.debug(selected);
                                    store.remove(selected);
                                }
                            }
                        );
                    }
                }]
            });
        }

        view.selModel.select(record);
        view.rowContextMenu.showAt(e.getXY());
    }
});
