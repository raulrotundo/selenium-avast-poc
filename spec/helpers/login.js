const { Builder, By, Key, until } = require('selenium-webdriver');

module.exports = driver => ({
  login: function (affiliateId) {
    // User Credentials
    const user = process.env.AVAST_USER_NAME;
    const pwd = process.env.AVAST_USER_PASSWORD;

    // Visit login page
    driver.wait(driver.get(process.env.AVAST_ADMIN_BASEURL + '?affiliate_id=' + affiliateId));
    // Login
    driver.findElement(By.name('login_username')).sendKeys(user);
    driver.findElement(By.name('login_password')).sendKeys(pwd, Key.ENTER);
    // Wait until user info has been loaded
    driver.wait(until.elementLocated(By.name('get_affiliate_notes_list')));
    // Go to avast portal
    driver.findElement(By.id('affiliate_sub_menu_login_page_101')).click()
    // Switch focus new window
    driver.getAllWindowHandles().then(function gotWindowHandles(allhandles) {
      driver.switchTo().window(allhandles[allhandles.length - 1]);
    });
    // Wait until id attribute is located
    driver.wait(until.elementLocated(By.id('app')));

    return driver.wait(driver.getTitle().then(function (title) {
      return (title === 'Avast Partner Portal' ? true : false);
    }));
  },
  userDropDownLoaded: function () {
    return driver.wait(until.elementLocated(By.id('user_dropdown_name_inner')));
  }
});