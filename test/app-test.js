// LICENSE : MIT
"use strict";
var injectBrowser = require('testium/mocha');
var assert = require('power-assert');

describe("index.html", function () {
    before(injectBrowser());
    beforeEach(function () {
        this.browser.navigateTo('/');
    });
    context("when default case", function () {
        it("should output filled with 'No E2E TestFramework'", function(){
            var output = this.browser.getElement("#js-output");
            var result = output.get("text");
            var expected = "No E2E TestFramework";
            assert.equal(result, expected);
        });
    });
    context("when select option", function () {
        it("then output filled with text of this option", function () {
            var firstInput = this.browser.getElement('input[name="framework_name"]');
            firstInput.click();
            var testFrameWorkName = firstInput.get("value");
            var output = this.browser.getElement("#js-output");
            var result = output.get("text");
            assert(result.indexOf(testFrameWorkName) >= 0);
        });
    });
});
