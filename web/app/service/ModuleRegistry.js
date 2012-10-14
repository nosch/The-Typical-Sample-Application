/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.service.ModuleRegistry
 *
 * Module registry for the entire application
 */

Ext.define('Company.service.ModuleRegistry', {
    configSuffix: '.Config',

    registry: {},

    constructor: function(cfg) {
        var me = this;

        Ext.Array.each(Ext.Loader.getConfig('modules'), function(module) {
            var configClass = Ext.String.capitalize(module) + me.configSuffix;

            Ext.Loader.require(
                configClass,
                function() {
                    var configObject = Ext.create(configClass);

                    Ext.apply(me.registry, configObject.getModuleConfig());
                },
                me
            );
        });
    }
});
