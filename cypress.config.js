const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    baseUrl: "https://www.demoblaze.com/index.html"
  },

  chromeWebSecurity: true,
  watchForFileChanges	: false

});
