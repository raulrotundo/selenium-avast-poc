const { Builder, By, Key, until } = require('selenium-webdriver');

module.exports = driver => ({
  checkDashboardWidgets: function () {
    return driver.wait(until.elementLocated(By.className('dashboardWidgets')));
  }
});