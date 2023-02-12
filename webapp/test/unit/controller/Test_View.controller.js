/*global QUnit*/

sap.ui.define([
    "my_first_app/controller/Counting.controller"
], function(Controller) {
    "use strict";

    QUnit.module("Counting Controller");

    QUnit.test("I should test the Counting controller", function(assert) {
        var oAppController = new Controller();
        oAppController.onInit();
        assert.ok(oAppController);
    });

});