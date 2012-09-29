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
        viewTitle: 'employeeViewTitle'
    },

    config: {
        viewTitle: null
    },

    init: function() {
        var me = this;
        var view = me.getView();
        var viewTitle = me.getViewTitle();

        view.setTitle(viewTitle);

        return me.callParent(arguments);
    }
});
