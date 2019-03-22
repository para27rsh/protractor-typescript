import { defineSupportCode } from 'cucumber';
import { HomePage } from '../pages/HomePage';
import { async } from 'q';
import { CouseDetailsPage } from '../pages/CourseDetails';



defineSupportCode(({ Given, When, Then }) => {
    var homepage = new HomePage();
    var coursedetails = new CouseDetailsPage();

Given(/^I navigate to application$/,async ()=>{

await homepage.openBrowser("http://localhost:8808");

});


When(/^I get First Heading$/,async()=>{

    await homepage.getFirstHeading();
});

When(/^I click on '([]^\")' course$/,async (headingtext)=>{

await homepage.clickFirstHeading(headingtext.toString());
});
Then(/^I should see '([^\"])' in coursedetails page$/,async(course)=>{
    expect(coursedetails.getCourseHeading).toBe('Selenium framework development');

})

});