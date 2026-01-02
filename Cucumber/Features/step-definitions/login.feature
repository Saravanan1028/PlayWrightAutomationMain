Feature: Login Feature

Scenario: Sucessful Login
Given user open login page
When user enter username and password
And user click login button
Then user should see the dashboard