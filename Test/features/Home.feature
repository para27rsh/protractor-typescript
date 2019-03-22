Feature: To work with home page
@smoke
Scenario: Click course of application
Given I navigate to application
And I get First Heading
And I click on 'Selenium framework development' course
Then I should see 'Selenium framework development' in coursedetails page