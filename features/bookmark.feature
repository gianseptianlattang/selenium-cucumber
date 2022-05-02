@BookmarkJobKitalulus
Feature: Bookmark a Job
  User can bookmark a job in Kitalulus

  Scenario: Bookmark a Job Kitalulus
    Given User on the Kitalulus homepage
    When User should see "Cari posisi dan perusahaan impianmu"
    And User can input "QA Engineer" to search vacancy
    And User should see bookmark button
    And User can click bookmark button
    Then User should see bookmark button with red background
