/** Custom RequireJS setup file to test user-specified setup files */

/* We want to minimize behavior changes between this test setup file and the
 * default setup file to avoid breaking tests which rely on any (current or
 * future) default behavior.  So we:
 * - Run the normal setup file
 * - Avoid introducing additional global variables
 * - Avoid maintaining two copies of the setup file
 */
// Load user environment
var dotenv = require('dotenv');
dotenv.load();
// Get the chromedriver from NPM dependencies
require('chromedriver');
// Time allowed for tests to complete in Jasmine in microseconds.
jasmine.getEnv().defaultTimeoutInterval = process.env.DEFAULT_TIMEOUT_INTERVAL;
// Global scope to be able require modules relative to root path
global.app_require = function (name) {
  return require(__dirname + '/' + name);
}