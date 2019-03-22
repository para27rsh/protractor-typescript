"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var HomePage_1 = require("./pages/HomePage");
describe("Going to write first test", function () {
    var homepage = new HomePage_1.HomePage();
    it("should pass without any issues", function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                //nagivate
                return [4 /*yield*/, homepage.openBrowser("http://localhost:8808/")];
                case 1:
                    //nagivate
                    _a.sent();
                    return [4 /*yield*/, homepage.getFirstHeading()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, homepage.clickFirstHeading()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=FirstTestSpec.js.map