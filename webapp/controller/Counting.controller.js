sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/core/Fragment"
    ],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function(Controller,
        MessageToast, Fragement) {
        "use strict";

        return Controller.extend("myfirstapp.controller.Counting", {
            onInit: function() {

            },
            exit: function() {
                var oView = this.byId("assignDialog");
                oView.close()
            },
            onOpenDialog: function() {

                // create dialog lazily
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "myfirstapp.view.assignCountReferencePopup"
                    });
                }
                this.pDialog.then(function(oDialog) {
                    oDialog.open();
                });
            }
        });
    });