Feature: End to End Ecommerce validation

    application regression
    @Regression
    Scenario: Ecommerce product delivery
    Given I open Ecommerce Page
    When I add items to cart 
    And Validate the total prices
    Then Select the country, submit and verify Thankyou message

    @Smoke
    Scenario: Filling the form to shop
    Given  I open Ecommerce Page
    When I fill the form details
    Then validate the forms behaviour 
    And select the shop Page
      