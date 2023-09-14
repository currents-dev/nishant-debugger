const { cloudPlugin } = require('cypress-cloud/plugin');

module.exports = (on, config) => {
  // https://github.com/cypress-io/cypress/issues/5336
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      // pass args for Chrome, Canary, Chromium, Edge browsers
      launchOptions.args.push('--disable-dev-shm-usage');
    }
    if (browser.name === 'electron') {
      // pass args for Electron browser
    }
    if (browser.family === 'firefox') {
      // pass args for Firefox browser
      launchOptions.args.push('-devtools');
    }

    return launchOptions;
  });

  //const _ = require('lodash');
  //const del = require('del');

  // allow capturing video for all tests
  // on('after:spec', (spec, results) => {
  //   if (results && results.video) {
  //     // Do we have failures for any retry attempts?
  //     const failures = _.some(results.tests, test => {
  //       return _.some(test.attempts, { state: 'failed' });
  //     });
  //     if (!failures) {
  //       // delete the video if the spec passed and no tests retried
  //       return del(results.video, { force: true });
  //     }
  //   }
  // });
  return cloudPlugin(on, config);
};
