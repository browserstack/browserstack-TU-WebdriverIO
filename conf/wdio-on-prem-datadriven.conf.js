var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  specs: [
    './test/specs/plain/login-datadriven.spec.js'
  ],
};

exports.config = _.defaultsDeep(overrides, defaults.config);
