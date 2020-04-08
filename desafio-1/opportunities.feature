Feature: Identify the given Opportunities
    In order to know about the opportunities and manage them
    As an user
    I want to be able to control and select them    

    Background:
        Given the user is logged in
        And the user have access to manage his opportunities

    Scenario: See information about the Opportunities panel
        Given that it has a "!" icon
        When the user clicks on that icon
        Then a modal, with more information about what those opportunities are, should show up

    Scenario: Categories of these Opportunities
        When the user has at least 1 opportunity showing
        And that opportunity was well registered
        Then the opportunity should be showing colored with the category color in a card