const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Orange HRM Report'
  },
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/'


    
  },
});
// npx cypress run --browser chrome --headed
// npm run cypress:run:chrome

