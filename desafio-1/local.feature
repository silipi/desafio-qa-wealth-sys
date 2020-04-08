Feature: Geolocation in Google Maps
    In order to set where I live or work
    As an user
    I want to be able to choose a place

    Background: 
        Given that the user is logged in
        And have access to change the local panel

    Scenario: Choose a place from pinning in Google Maps
        When the user clicks in the map in local panel
        Then a page with the Google Maps API should show up to the user 
        And he should be able to pin a place from a map

    Scenario: Choose a place from typing in a input field
        When the user clicks in the description of the place below the map
        Then a modal should show up
        And the focus of the page will be at an input field from that modal
        And he should be able to type a place and an API search for that place