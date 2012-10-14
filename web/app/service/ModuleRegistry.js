/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.service.ModuleRegistry
 *
 * Module registry for the entire application
 */

Ext.define('Company.service.ModuleRegistry', {
    singleton: true,

    configSuffix: '.Config',

    moduleConfig: {},

    constructor: function() {
        var me = this;

        var modules = Ext.Loader.getConfig('modules');

        if (!modules || 0 === modules.length) {
            Ext.Error.raise({
                msg: 'No module configuration found! Please configure application modules.'
            });

            return;
        }

        Ext.Array.each(modules, function(module) {
            var configClass = Ext.String.capitalize(module) + me.configSuffix;

            Ext.Loader.require(
                configClass,
                function() {
                    var configObject = Ext.create(configClass);

                    Ext.apply(me.moduleConfig, configObject.getModuleConfig());
                }
            );
        });
    },

    getModuleConfig: function() {
        var me = this;

        return me.moduleConfig;
    }
});
