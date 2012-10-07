/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.view.ContextMenu
 * @extends Ext.menu.Menu
 *
 * Context menu view component of the employee module
 */

Ext.define('Employee.view.ContextMenu', {
    extend: 'Ext.menu.Menu',

    mixins: [
        'Deft.mixin.Controllable'
    ],

    controller: 'Employee.controller.ContextMenuViewController',

    xtype: 'employee.contextmenu',

    items : [{
        text: 'Insert record...',
        itemId: 'insertItem'
    }, {
        text: 'Edit record...',
        itemId: 'editItem'
    }, {
        text : 'Delete record...',
        itemId: 'deleteItem'
    }]
});
