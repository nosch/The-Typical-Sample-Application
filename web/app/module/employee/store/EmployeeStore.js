/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.store.EmployeeStore
 * @extends Ext.data.Store
 *
 * Store of the employee module
 */

Ext.define('Employee.store.EmployeeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.proxy.Rest',
        'Ext.window.MessageBox'
    ],

    model: 'Employee.model.EmployeeModel',

    autoLoad: true,

    autoSync: true,

    pageSize: 20,

    proxy: {
        type: 'rest',
        appendId: true,
        api: {
            create: 'employee/',
            read: 'employee/',
            update: 'employee/',
            destroy: 'employee/'
        },
        reader: {
            type: 'json',
            root: 'data',
            idProperty: 'id',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            root: 'data',
            nameProperty: 'mapping',
            encode: true,
            writeAllFields: true,
            allowSingle: false
        },
        listeners: {
            exception: function(proxy, response, operation) {
                Ext.MessageBox.show({
                    title: 'EXCEPTION',
                    msg: Ext.String.format(
                        '{0} ({1})',
                        response.status,
                        response.statusText
                    ),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
        /*
        buildUrl: function(request) {
            var url = Ext.data.proxy.Rest.prototype.buildUrl.apply(this, arguments);
            // Adds a slash before query string
            return url.replace(/(\d+)(\?)/, "$1/$2");
        }
        */
    }
});
