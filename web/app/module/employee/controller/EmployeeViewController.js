/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.controller.EmployeeViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the main view component of the employee module
 */

Ext.define('Employee.controller.EmployeeViewController', {
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
