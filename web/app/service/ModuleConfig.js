/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.service.ModuleConfig
 *
 * Abstract configuration class for application modules
 */

Ext.define('Company.service.ModuleConfig', {
    moduleConfig: null,

    getConfig: function() {
        var me = this;

        return me.moduleConfig;
    }
});
