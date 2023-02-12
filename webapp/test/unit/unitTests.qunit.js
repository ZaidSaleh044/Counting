/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"my_first_app/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
