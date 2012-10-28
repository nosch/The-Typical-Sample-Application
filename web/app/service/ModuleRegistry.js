/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.service.ModuleRegistry
 *
 * Module registry for the entire application
 */

Ext.define('Company.service.ModuleRegistry', {
    singleton: true,

    registry: null,

    constructor: function() {
        var me = this;
        var loaderConfig = Ext.Loader.getConfig();
        var modulePath =  loaderConfig.paths.module;
        var moduleNames = loaderConfig.modules;

        me.registry = {};

        if (!moduleNames || 0 === moduleNames.length) {
            return;
        }

        Ext.Array.each(moduleNames, function(moduleName) {
            var namespace = Ext.String.capitalize(moduleName);
            var configClass = namespace + '.Config';

            Ext.Loader.setPath(namespace, modulePath + moduleName);

            Ext.Loader.require(
                configClass,
                function() {
                    var configObject = Ext.create(configClass);
                    var moduleConfig = configObject.getConfig();

                    if (true === moduleConfig.active) {
                        me.registry[moduleName] = {};

                        Ext.apply(me.registry[moduleName], moduleConfig);
                    }
                }
            );
        });
    },

    getRegistry: function() {
        var me = this;

        return me.registry;
    }
});
