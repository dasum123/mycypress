Feature: Login to Mercury Tours

  Scenario: Valid login
    Given I open Mercury Tours login page
    When I enter username "mercury" and password "mercury"
    And I click the login button
    Then I should see the homepage
