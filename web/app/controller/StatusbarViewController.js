/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.controller.StatusbarViewController
 * @extends Deft.mvc.ViewController
 *
 * ViewController for the status bar view component of the default module
 */

Ext.define('Company.controller.StatusbarViewController', {
    extend: 'Deft.mvc.ViewController',

    mixins: [
        'Deft.mixin.Injectable'
    ],

    inject: {

    },

    config: {

    },

    control: {

    },

    init: function() {
        var me = this;

        console.debug('INIT StatusbarViewController');
    }
});
