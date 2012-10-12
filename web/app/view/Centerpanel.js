/**
 * @author Norbert Schmidt <norbert.schmidt@mayflower.com>
 * @class Company.view.Centerpanel
 * @extends Ext.panel.Panel
 *
 * View component for the center panel (main content) of the default module
 */

Ext.define( 'Company.view.Centerpanel', {
    extend: 'Ext.panel.Panel',

    mixins: [
        'Deft.mixin.Controllable'
    ],

    controller: 'Company.controller.CenterpanelViewController',

    xtype: 'company.centerpanel',

    layout: 'fit'
});
