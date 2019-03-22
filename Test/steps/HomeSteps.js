"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var cucumber_1 = require("cucumber");
var HomePage_1 = require("../pages/HomePage");
var CourseDetails_1 = require("../pages/CourseDetails");
cucumber_1.defineSupportCode(function (_a) {
    var Given = _a.Given, When = _a.When, Then = _a.Then;
    var homepage = new HomePage_1.HomePage();
    var coursedetails = new CourseDetails_1.CouseDetailsPage();
    Given(/^I navigate to application$/, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.openBrowser("http://localhost:8808")];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    When(/^I get First Heading$/, function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.getFirstHeading()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    When(/^I click on '([]^\")' course$/, function (headingtext) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.clickFirstHeading(headingtext.toString())];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    Then(/^I should see '([^\"])' in coursedetails page$/, function (course) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            expect(coursedetails.getCourseHeading).toBe('Selenium framework development');
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=HomeSteps.js.map