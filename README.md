## Selenium + NodeJS + Jasmine POC

### What's included?

* [Selenium Webdriver](https://github.com/facebookincubator/create-react-app): Selenium is a browser automation library. Most often used for testing web-applications, Selenium may be used for any task that requires automating interaction with the browser.
* [ChromeDriver](https://www.npmjs.com/package/chromedriver): An NPM wrapper for Selenium ChromeDriver.
* [Jasmine](https://www.npmjs.com/package/jasmine): The jasmine module is a package of helper code for developing Jasmine projects for Node.js.
* [jasmine-node](https://github.com/mhevery/jasmine-node): This node.js module makes the wonderful Pivotal Lab's jasmine spec framework available in node.js.
* [GruntJS](https://gruntjs.com/): JavaScript Task Runner.

### Prerequisites
* Install [NodeJS](https://nodejs.org/en/download/).
* Rename .sample-env to .env. the purpose is to be an example of environment configuration with dummy values so,s you can just copy it and replace the dummy values with the actual values so you dont have to remember all the values your app need.
* In order to get started, you'll want to install Grunt's command line interface (CLI) globally. You may need to use sudo (for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.:
```bash
npm install -g grunt-cli
```

### Installation
Clone the repo: 
```bash
git clone git@github.com:raulrotundo/selenium-avast-poc.git
```

Installing dependencies: 
```bash
npm install
```

### Run all test cases
```bash
grunt exec:test:spec
```

### Run a specific test case
```bash
grunt exec:test:[spec file or directory path]
```
