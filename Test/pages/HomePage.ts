//Import the class 
import { browser, by, element, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from './BasePage';


const locators = {


    heading: {
        type: IdentificationType[IdentificationType.Css],
        value: ".well.hoverwell.thumbnail > h2"
    },
    insideheading: {
        type: IdentificationType[IdentificationType.Xpath],
        value: "//span[contains(text(),'4th')]"

    }
}



export class HomePage extends BasePage {
    //  Selenium Develpment course Heading
    heading = this.elementLocator(locators.heading)
    //Inside Selenim Development course Heading
    headings = this.elementLocator(locators.insideheading);

    //Open Browser 
    async openBrowser(url: string) {
        await browser.get(url);
        await browser.driver.manage().window().maximize();
    }
    async getFirstHeading() {
        await this.heading.getText().then((text) => {

            console.log("The heading is :-" + text);

        });
    }
    async clickFirstHeading(heading:string) {
        console.log(heading);
        await this.heading.click();
    }

}
