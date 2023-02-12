sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass"
], function(ManagedObject, Fragment, syncStyleClass) {
    "use strict"

    return ManagedObject.extend("myfirstapp.controller.AssignDialog", {

        constructor: function(oView) {
            this._oView = oView
        },

        exit: function() {
            delete this._oView;
        },

        open: function() {
            var oView = this._oView;

            // create the dialog lazily
            if (!oView.byId("assignDialog")) {
                var oFragmentController = {
                    onCloseDialog: function() {
                        oView.byId("assignDialog").close();
                    }
                }

                // load asynchronous XML fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "myfirstapp.view.assignCountReferencePopup",
                    controller: oFragmentController
                }).then(function(oDialog) {
                    // connect dialog to the root view of the component (models, lifecycle)
                    oView.addDependent(oDialog);
                    // forward compact/cozy style into dialog
                    syncStyleClass(oView.getController().getOwnerComponent().getContentDensityClass(), oView, oDialog);
                    oDialog.open();
                })
            } else {
                oView.byId("assignDialog").open();
            }
        }
    });
});