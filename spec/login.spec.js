const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Avast Login Test', function () {

  let driver, helper;

  // Open the website in the browser before each test is run
  beforeEach(function (done) {
    driver = new Builder().forBrowser('chrome').build();
    helper = app_require('helpers/login')(driver);
    helper.login(process.env.AVAST_AFFILIATE_ID).then(loggedIn => {
      expect(loggedIn).toBe(true);
      done();
    });
  });

  // Close the website after each test is run (so that it is opened fresh each time)
  afterEach(function (done) {
    driver.quit().then(done);
  });

  it('should load user dropdown menu', function (done) {
    helper.userDropDownLoaded().then(dropDown => {
      expect(dropDown).toBeDefined();
      done();
    });
  });
});