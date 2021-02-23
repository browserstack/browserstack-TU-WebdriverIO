exports.config = {
  runner: 'local',
  specs: [
    './test/specs/plain/*.js'
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true
  }],
  logLevel: 'warn',
  coloredLogs: true,
  bail: 0,
  baseUrl: 'https://bstackdemo.com/',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    ['chromedriver', {
      args: ['--silent']
    }]
  ],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },
}
