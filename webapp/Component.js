/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "myfirstapp/model/models",
        "./controller/AssignDialog"
    ],
    function(UIComponent, Device, models, AssignDialog) {
        "use strict";

        return UIComponent.extend("myfirstapp.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function() {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");

                // set dialog
                this._assignDialog = new AssignDialog(this.getRootControl());
            },
            exit: function() {
                this._assignDialog.destroy();
                delete this._assignDialog;
            },

            openHelloDialog: function() {
                this._assignDialog.open();
            }
        });
    }
);