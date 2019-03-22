import { browser, by, element, $$, $ } from 'protractor';

export enum IdentificationType {
    Id,
    js,
    Name,
    Css,
    Xpath,
    PartialLinkText,
    ClassName

}

export class BasePage {


    elementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Id]:
                return element(by.id(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return element(by.name(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                return element(by.linkText(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return element(by.className(obj.value));
            case IdentificationType[IdentificationType.js]:
                return element(by.js(obj.value));
            default:
                break;

        }

    }

}
