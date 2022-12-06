Feature: Testando API PokeAPI

Background: Executa antes de cada teste.
    * def url_base = "https://pokeapi.co/api/v2/"
    * def url_go = "https://gorest.co.in/public/v2/users/"

Scenario: Testando se o pokemon com ID 1 é o bulbasaur
    Given url url_base
    And path "pokemon/1"
    When method get
    Then status 200
    And match response.id == 1
    And match response.name == "bulbasaur"

Scenario: Testando se o pokemon com ID 4 
    Given url url_base
    And path "pokemon/4"
    When method get
    Then status 200
    And match response.id == 4
    And match response.types[*].type.name contains "fire"

Scenario: Buscando pokemon naruto e esperando erro 
    Given url url_base
    And path "pokemon/naruto"
    When method get
    Then status 404

Scenario: Testando se o peso do snorlax esta certo
    Given url url_base
    And path "pokemon/snorlax"
    When method get
    Then status 200
    And match response.name == "snorlax"
    And match response.weight == 4600

Scenario: Criando User
    Given url url_go
    And request {name:"User","email": "user@inatel.br","gender":"male","status":"active"}
    And header Authorization = "Bearer 88c40e7f7c09280cbbed8e010ba5fb7b71ec4c9ae553ba6a0b3bf64a620c7223"
    When method post
    Then status 201
