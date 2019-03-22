"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Id"] = 0] = "Id";
    IdentificationType[IdentificationType["js"] = 1] = "js";
    IdentificationType[IdentificationType["Name"] = 2] = "Name";
    IdentificationType[IdentificationType["Css"] = 3] = "Css";
    IdentificationType[IdentificationType["Xpath"] = 4] = "Xpath";
    IdentificationType[IdentificationType["PartialLinkText"] = 5] = "PartialLinkText";
    IdentificationType[IdentificationType["ClassName"] = 6] = "ClassName";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.elementLocator = function (obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return protractor_1.element(protractor_1.by.name(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return protractor_1.element(protractor_1.by.className(obj.value));
            case IdentificationType[IdentificationType.js]:
                return protractor_1.element(protractor_1.by.js(obj.value));
            default:
                break;
        }
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map