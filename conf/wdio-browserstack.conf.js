exports.config = {
  runner: 'local',
  browserstackLocal: false,
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',
  specs: [
    './test/specs/plain/*.js'
  ],
  capabilities: [{
    maxInstances: 1,
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
  logLevel: 'warn',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'https://bstackdemo.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    ['browserstack', {
      browserstackLocal: false
    }]
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
