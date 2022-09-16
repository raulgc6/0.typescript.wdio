Feature: Demo Feature
cambios en local

    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then click on the first search result
        Then The URL should match <ExpectedURL>

        Examples:
            | TestID    | SearchItem | ExpectedURL             |
            | DEMO_TC01 | WDIO       | https://webdriver.io/ |