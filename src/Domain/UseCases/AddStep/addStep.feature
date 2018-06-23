Feature: Add Step
  As an ELT user
  I want to transformate my data
  So that I can extrapolate information

  Scenario: Sum fixed value
    Given I use the "OfEmployees" fixture
    When I sum some value to their "income"
    Then the result will be increased by that value
