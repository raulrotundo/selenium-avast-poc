const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Initial Selemium Test', function () {

  // Open the website in the browser before each test is run
  beforeEach(function (done) {
    driver = new Builder()
      .forBrowser('chrome')
      .build();
    driver.get('http://www.google.com/ncr').then(done);
  });

  // Close the website after each test is run (so that it is opened fresh each time)
  afterEach(function (done) {
    driver.quit().then(done);
  });

  // Test to ensure we are on the google home page by checking the <body> tag id attribute
  it('Google page should get a correct title after query', function (done) {
    driver
      .then(_ =>
        driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN))
      .then(_ => {
        driver.getTitle().then(function (title) {
          expect(title).toBe('webdriver - Google Search');
          done();
        });
      });
  });
});