/// <reference types="cypress" />


it('google test', function(){

    cy.visit('https://www.google.com/')
    cy.get('.gLFyf').type('gmail{enter}')
    cy.get('[data-hveid="CA8QAA"] > .jtfYYd > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
   
  }
  
  )