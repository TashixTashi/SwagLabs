# SwagLabs
This is a web automation project for the following website: https://www.saucedemo.com

---------------------------------------------------------
Clone the repository & install dependencies

$ git clone 

$ cd to project

$ npm install

Folders
---------------------------------------------------------

cypress/e2e/page: Page object files which include element selectors and functions that are used in tests.

cypress/e2e/test: Test files which include the actual tests.

Execute tests
---------------------------------------------------------

Execute the Cypress GUI

Enter the command - npx cypress open

Select E2E testing

Select Chrome and start E2E testing

Select the test you would like to run

Use this command to run all tests and report- npx cypress run --spec "cypress/e2e/test" --headed --browser chrome 
