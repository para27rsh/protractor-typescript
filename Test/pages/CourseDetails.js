"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var BasePage_1 = require("./BasePage");
var locators = {
    courseHeading: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Xpath],
        value: ".well.hoverwell.thumbnail > h2"
    }
};
var CouseDetailsPage = /** @class */ (function (_super) {
    tslib_1.__extends(CouseDetailsPage, _super);
    function CouseDetailsPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.courseHeading = _this.elementLocator(locators.courseHeading);
        return _this;
    }
    CouseDetailsPage.prototype.getCourseHeading = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.courseHeading];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return CouseDetailsPage;
}(BasePage_1.BasePage));
exports.CouseDetailsPage = CouseDetailsPage;
//# sourceMappingURL=CourseDetails.js.map