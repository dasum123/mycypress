import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open Mercury Tours login page", () => {
  cy.visit("http://demo.guru99.com/test/newtours/");
});

When("I enter username {string} and password {string}", (username, password) => {
  cy.get('input[name="userName"]').type(username);
  cy.get('input[name="password"]').type(password);
});

When("I click the login button", () => {
  cy.get('input[name="submit"]').click();
});

Then("I should see the homepage", () => {
  cy.contains("Login Successfully").should("be.visible");
});
