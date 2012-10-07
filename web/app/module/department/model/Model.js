/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Department.model.Model
 * @extends Ext.data.Model
 *
 * Model of the department module
 */

Ext.define('Department.model.Model', {
    extend: 'Ext.data.Model',

    fields: [{
        name: 'id',
        type: 'int'
    }, {
        name: 'name',
        mapping: 'name'
    }, {
        name: 'head',
        mapping: 'head'
    }],

    validations: [{
        field: 'id',
        type: 'presence'
    }, {
        field: 'name',
        type: 'presence'
    }, {
        field: 'head',
        type: 'presence'
    }]
});
