const { Builder, By, Key, until } = require('selenium-webdriver');

describe('Test Suite for Sales Manager', function () {
  //User pass
  var user = process.env.AVAST_USER_NAME;
  var pwd = process.env.AVAST_USER_PASSWORD;
  // Open the website in the browser before each test is run
  beforeEach(function (done) {
    driver = new Builder()
      .forBrowser('chrome')
      .build();
    driver.manage().window().maximize();
    driver.get('https://avgdev.directtrack.com/admin/affiliate/affiliate_info/?affiliate_id=358').then(done);
  });

  // Close the website after each test is run (so that it is opened fresh each time)
  afterEach(function (done) {
    driver.quit().then(done);
  });
  
   it('Should show the dashboard without any widgets', function (done) {
    //Login
    driver.findElement(By.name('login_username')).sendKeys(user);
    driver.findElement(By.name('login_password')).sendKeys(pwd, Key.ENTER);
    //Wait for admin to load
    driver.executeAsyncScript(
      // Everything inside here will be executed by the browser, not the server
      function (secondValue) {
        // This is the callback function we can call when everything is done
        var cb = arguments[ arguments.length - 1 ];
        // We'll use setTimeout() to make the script
        // wait before calling the callback
        setTimeout(function () {
           cb({
              firstValue: 1,
              secondValue: secondValue
           });
        }, 15000);
      })
    //Log in as Avast
    driver.findElement(By.xpath('//*[@id="affiliate_sub_menu_login_page_101"]')).click();
    //Wait for portal to load
    driver.executeAsyncScript(
      function (secondValue) {
        var cb = arguments[ arguments.length - 1 ];
        setTimeout(function () {
           cb({
              firstValue: 1,
              secondValue: secondValue
           });
        }, 25000);
      })
    // Get current window
    driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
      driver.switchTo().window(allhandles[allhandles.length - 1]);
    });
    //Order
    driver.findElement(By.xpath('//*[@id="app"]/div[2]/div[2]/div[1]/div/div/div[2]/div[1]/span[2]')).click();
    //New Order
    driver.findElement(By.xpath('//div[@id="app"]/div[2]/div[2]/div/div/div/div[2]/div[2]/div[2]/div/span')).click();
    //Radio button Distributor
    driver.findElement(By.xpath('(//button[@type="button"])[11]')).click();
    //Wait for portal to load
    driver.executeAsyncScript(
      function (secondValue) {
        var cb = arguments[ arguments.length - 1 ];
        setTimeout(function () {
           cb({
              firstValue: 1,
              secondValue: secondValue
           });
        }, 3000);
      })
    //Select a Ditributor
    driver.findElement(By.xpath('//*[@id="app"]/div[2]/div[2]/div[2]/div[7]/div/div/div/div/div[2]/div[1]/div[2]/div/div/div/div[3]/div[2]/div/div/div/div/div/div[1]/div/label')).sendKeys('EMEA Distributor Test');
    driver.findElement(By.id('1516107407573')).sendKeys('EMEA Distributor Test');;
    //Select Products
    driver.findElement(By.xpath('//*[@id="app"]/div[2]/div[2]/div[2]/div[7]/div/div/div/div/div[2]/div[2]/div[1]/div[2]')).click();
    //One year product
    driver.findElement(By.xpath('//*[@id="activeTable1515160084402"]/div[2]/div[2]/div/div[1]/div[1]/div')).click();
    //Avast Premier selected
    driver.findElement(By.xpath('//*[@id="activeTable1515160084402"]/div[2]/div[2]/div/div[2]/div[2]/div/span')).click();
    //Review & Confirm
    driver.findElement(By.xpath('//*[@id="app"]/div[2]/div[2]/div[2]/div[7]/div/div/div/div/div[2]/div[4]/div[1]/div[2]')).click();
    //Wait for pricing
    driver.executeAsyncScript(
      // Everything inside here will be executed by the browser, not the server
      function (secondValue) {
        // This is the callback function we can call when everything is done
        var cb = arguments[ arguments.length - 1 ];
        // We'll use setTimeout() to make the script
        // wait before calling the callback
        setTimeout(function () {
           cb({
              firstValue: 1,
              secondValue: secondValue
           });
        }, 6000);
      })
    //WTOC Payment
    driver.findElement(By.xpath('//*[@id="app"]/div[2]/div[2]/div[2]/div[7]/div/div/div/div/div[2]/div[4]/div[2]/div/div/div/div[9]/div[3]/div/button')).click();
  done();
  });
});