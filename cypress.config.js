const { defineConfig } = require('cypress');
const { debuggerPlugin } = require('cypress-debugger');

module.exports = defineConfig({
  viewportHeight: 800,
  viewportWidth: 1280,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  defaultCommandTimeout: 60000,
  experimentalWebKitSupport: true,
  pageLoadTimeout: 60000,
  execTimeout: 60000,
  taskTimeout: 60000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  projectId: '<currentsProjectId>',
  fileServerFolder: '.',
  trashAssetsBeforeRuns: false,
  experimentalMemoryManagement: true,
  fixturesFolder: './cypress/fixtures',
  modifyObstructiveCode: false,
  video: true,
  videosFolder: './dist/cypress/apps/e2e/videos',
  screenshotsFolder: './dist/cypress/apps/e2e/screenshots',
  chromeWebSecurity: false,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      debuggerPlugin(on, config, {
        failedTestsOnly: false,
        targetDirectory: './dist/cypress/apps/e2e/reports',
      });
      return require('./cypress/plugins/index.js')(on, config);
    },
    baseUrl: 'https://google.com',
    specPattern: './cypress/e2e/*.{js,jsx,ts,tsx}',
    supportFile: './cypress/support/e2e.js',
  },
});
