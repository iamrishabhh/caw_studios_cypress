const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,ts,feature}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 850,
    viewportWidth: 1350,
  },

  
  env: {
    url : "https://testpages.herokuapp.com/styled/tag/dynamic-table.html",
  },

  
  defaultCommandTimeout: 8000,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots',
  video: true,
  videoCompression: 32,
  videosFolder: 'cypress/videos'
});
