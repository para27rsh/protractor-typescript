"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
//Import the class 
var protractor_1 = require("protractor");
var BasePage_1 = require("./BasePage");
var locators = {
    heading: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".well.hoverwell.thumbnail > h2"
    },
    insideheading: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: "//span[contains(text(),'4th')]"
    }
};
var HomePage = /** @class */ (function (_super) {
    tslib_1.__extends(HomePage, _super);
    function HomePage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //  Selenium Develpment course Heading
        _this.heading = _this.elementLocator(locators.heading);
        //Inside Selenim Development course Heading
        _this.headings = _this.elementLocator(locators.insideheading);
        return _this;
    }
    //Open Browser 
    HomePage.prototype.openBrowser = function (url) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get(url)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.driver.manage().window().maximize()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.getFirstHeading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.heading.getText().then(function (text) {
                            console.log("The heading is :-" + text);
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.clickFirstHeading = function (heading) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(heading);
                        return [4 /*yield*/, this.heading.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return HomePage;
}(BasePage_1.BasePage));
exports.HomePage = HomePage;
//# sourceMappingURL=HomePage.js.map