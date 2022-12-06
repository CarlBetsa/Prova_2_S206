/// <reference types="cypress"/>

function newCustomer(nome, sobrenome, codigo) {

  let firstName = nome
  let lastName = sobrenome
  let code = codigo

  cy.get(':nth-child(3) > .btn').click()
  cy.get('[ng-class="btnClass1"]').click()
  cy.get(':nth-child(1) > .form-control').type(firstName)
  cy.get(':nth-child(2) > .form-control').type(lastName)
  cy.get(':nth-child(3) > .form-control').type(code)
  cy.get('form.ng-dirty > .btn').click()

  return 0

}

describe("Testes no site Globalsqa", () => {
  
  before(() => {
    cy.visit("https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login")
  })

  beforeEach(() => {
    cy.get('.home').click()
  })

  it("cadastro de dois novos clientes", () => {

    newCustomer("Severus", "Snape", "E54726")
    cy.get('.home').click()
    newCustomer("Draco", "Malfoy", "E54822")
    
  })

  it("deletando Harry Potter dos clientes", () => {
    
    cy.get(':nth-child(3) > .btn').click()
    cy.get('[ng-class="btnClass3"]').click()
    cy.get(':nth-child(2) > :nth-child(5) > button').click()

  })

  it("Hermione Granger sacando 2000 dolares", () => {

    cy.get('.borderM > :nth-child(1) > .btn').click()
    cy.get('#userSelect').select("Hermoine Granger")
    cy.get('form.ng-valid > .btn').click() 
    cy.get('[ng-class="btnClass3"]').click()
    cy.get('.form-control').type("2000")
    cy.get('form.ng-dirty > .btn').click()
    cy.get('.error').should("contain.text", "Transaction successful")

  })
  
})