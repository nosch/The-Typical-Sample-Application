/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Department.store.Store
 * @extends Ext.data.Store
 *
 * Store of the department module
 */

Ext.define('Department.store.Store', {
    extend: 'Ext.data.Store',

    model: 'Department.model.Model',

    autoLoad: true,

    autoSync: true,

    pageSize: 20,

    data : [{
        id: 1, name: 'Sales and Marketing', head: 'vacant'
    }, {
        id: 2, name: 'Finances', head: 'vacant'
     }, {
        id: 3, name: 'Public Relations', head: 'vacant'
     }, {
        id: 4, name: 'Payroll', head: 'vacant'
     }, {
        id: 5, name: 'Research and Development', head: 'vacant'
     }]
});
