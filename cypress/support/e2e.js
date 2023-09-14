import './commands';
const { debuggerSupport } = require('cypress-debugger');
debuggerSupport();

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  // should be removed once the error is properly handled in the
  // source code
  if (err.message.includes('(status: 403, code: 54007)')) {
    return false;
  }
});
