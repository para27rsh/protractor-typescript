//Import the class 
import { browser, by, element, $$, $ } from 'protractor';
import { IdentificationType, BasePage } from './BasePage';


const locators = {


    courseHeading: {
        type: IdentificationType[IdentificationType.Xpath],
        value: ".well.hoverwell.thumbnail > h2"
   
}
}



export class CouseDetailsPage extends BasePage {
   
courseHeading=this.elementLocator(locators.courseHeading);

async getCourseHeading(){
 await this.courseHeading;

}
}
