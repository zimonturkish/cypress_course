/// <reference types="Cypress"/>

describe('Cypress Clearing inputs', () => {
  it('Type and clear', () => {
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('#name').type('TestName')
    cy.wait(2000)
    cy.get('#name').clear().type('newtext')
  })
})