/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Employee.model.Model
 * @extends Ext.data.Model
 *
 * Model of the employee module
 */

Ext.define('Employee.model.Model', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'departmentId',
        mapping: 'department_id',
        type: 'int'
    }, {
        name: 'firstName',
        mapping: 'firstname'
    }, {
        name: 'middleName',
        mapping: 'middle'
    }, {
        name: 'lastName',
        mapping: 'lastname'
    }, {
        name: 'middle'
    }, {
        name: 'title'
    }, {
        name: 'maritalStatus',
        mapping: 'maritalstatus'
    }, {
        name: 'street'
    }, {
        name: 'city'
    }, {
        name: 'state'
    }, {
        name: 'dateHired',
        mapping: 'datehired',
        type: 'date',
        format: 'Y-m-d'
    }, {
        name: 'dob',
        type: 'date',
        format: 'Y-m-d'
    }, {
        name: 'zip'
    }, {
        name: 'active',
        type: 'boolean',
        defaultValue: false
    }, {
        name: 'deleted',
        type: 'boolean',
        defaultValue: false
    }, {
        name: 'department',
        type: 'string'
    }],
    validations: [{
        field: 'departmentId',
        type: 'presence'
    }, {
        field: 'firstName',
        type: 'presence'
    }, {
        field: 'lastName',
        type: 'presence'
    }, {
        field: 'maritalStatus',
        type: 'inclusion',
        list: ['Common-Law', 'Married', 'Single', 'Divorced']
    }]
});
