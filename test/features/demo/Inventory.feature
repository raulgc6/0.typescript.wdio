Feature: Inventory


    Scenario Outline: Demo Inventory
        Given Login to inventory web app
        Then Inventory page should list <numberOfProducts>
        Then Validate all products have valid price
        


        Examples:
            | TestID    |   numberOfProducts    |
            | INV_TC01 |   6  | 