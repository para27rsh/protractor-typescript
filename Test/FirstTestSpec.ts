import { browser, by, element, $$, $ } from 'protractor';
import { HomePage } from './pages/HomePage';
describe("Going to write first test", () => {
    var homepage = new HomePage();

    it("should pass without any issues", async () => {
        //nagivate
        await homepage.openBrowser("http://localhost:8808/");
        await homepage.getFirstHeading();
        await homepage.clickFirstHeading();

    });


});