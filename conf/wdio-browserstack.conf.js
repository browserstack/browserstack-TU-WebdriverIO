exports.config = {
  runner: 'local',
  browserstackLocal: true,
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',
  specs: [
    './test/specs/plain/*.js'
  ],
  capabilities: [{
    maxInstances: 1,
    'browserstack.debug': true,
    'browserstack.video': false,
    browserName: 'firefox',
    acceptInsecureCerts: true,
    name: 'BStack-Test',
    build: 'BStack Build webdriverio single'
  }],
  logLevel: 'warn',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'http://localhost:3000',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    ['browserstack', {
      browserstackLocal: true
    }]
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
