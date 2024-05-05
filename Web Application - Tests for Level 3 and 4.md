# Tests for Level 3 and 4

The zip file [level34-tests.zip](https://github.com/AvaMGardiner/COMP2110-Web-Technology/files/15211699/level34-tests.zip) contains the tests for levels 3 and 4 that will be used for autograding.

Unpack the zip file and copy the files into your project:

- `uploadData.js` - this replaces the previous version of this file
- `package.json` - this replaces the previous version of this file
- `cypress/integration/*` - new test files

You should:
- remove the previous test files in `cypress/integration` before adding these new ones
- remove the file `cypress/integration/utils.js`, it is no longer needed
- remove the directory `.github`, this will prevent GitHub from trying to run the tests automatically

Once you have the files in place, run:

`npm install`

to install new dependencies.

The new `package.json` file defines some useful commands:

- `npm start` - will run both the backend and frontend servers concurrently
- `npm run sampledata` - as before will load sample data, must be done before testing
- `npm run testall` - will run all tests from the terminal
- `npm run cypress` - will open up Cypress as before so you can run tests individually

The tests expect the Strapi database to be set up as specified and some of the tests check this. You need to load the sample data yourself, and the Strapi server needs to be running for you to do this.

## Tests

There are two test files that reproduce the tests from levels 1 and 2, with a few changes due to using the Strapi backend.

The remaining test files check the different requirements for levels 3 and 4 as before.

The 5 marks for level 3 and 4 tests will be allocated based on passing the level 3 and 4 tests. Level 1 and 2 tests are there for you to check that you still meet those requirements.

## Automating Testing on GitHub

Due to some technical challenges, I've not been able to make these tests run on GitHub as we did for level 1 and 2. You will need to run the tests yourself to check your progress. We will automate the running of tests on a snapshot of your repository once the deadline has been reached.

## Bugs

There may, of course, be bugs in these tests. Please report anything that you see. We will update you with announcements if there is something of general concern.

