const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Add the cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);

      // Set up file preprocessor for Cucumber with esbuild
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)]
      }));

      // Make sure to return the config object after modifying it
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",  // Adjust the pattern to match your feature files
    supportFile: false,  // Support file is usually false for Cucumber
  },
});
