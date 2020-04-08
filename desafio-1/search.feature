Feature: Search for Activities
    In order to organize and know about activities
    As an user
    I want to be able to Search for them     

    Background:
        Given the user is logged in
        And the user have access to search for

    Scenario: Simple Activities Search
        When the user enters "something" into the search bar
        Then all the activities related to "something" are shown below the search bar

    Scenario: Search result linking into a dedicated page
        Given the search results for "something" are shown
        When the user clicks the first result link
        Then the page for the chosen result link is displayed

    Scenario: Filtering the options
        Given the user has typed "something" in the search bar
        When the user clicks in one of the filters avaliable
        Then should be showing only the results with the category of the filter selected    