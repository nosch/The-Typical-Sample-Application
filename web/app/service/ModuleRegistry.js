/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.service.ModuleRegistry
 *
 * Module registry for the entire application
 */

Ext.define('Company.service.ModuleRegistry', {
    singleton: true,

    configSuffix: '.Config',

    registry: {},

    constructor: function(cfg) {
        var me = this;

        Ext.Array.each(Ext.Loader.getConfig('modules'), function(module) {
            var configClass = Ext.String.capitalize(module) +  me.configSuffix;

            Ext.Loader.require(
                configClass,
                function() {
                    var configObject = Ext.create(configClass);

                    me.registry[module] = configObject.getModuleConfig();
                },
                me
            );
        });
    },

    getRegistry: function() {
        var me = this;

        return me.registry;
    }
});
