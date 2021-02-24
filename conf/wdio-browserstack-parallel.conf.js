var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  browserstackLocal: false,
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  specs: [
    './test/specs/plain/*.js'
  ],
  capabilities: [{
    maxInstances: 5,
    'browserstack.debug': true,
    'browserstack.video': true,
    os: "OS X",
    os_version: "Catalina",
    browserName: 'Chrome',
    browser_version: "latest",
    acceptInsecureCerts: true,
    name: 'BStack-Test',
    build: 'BStack Build webdriverio single'
  }],
  services: [
    ['browserstack', {
      browserstackLocal: false
    }]
  ],
};

exports.config = _.defaultsDeep(overrides, defaults.config);
