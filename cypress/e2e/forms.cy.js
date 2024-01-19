/// <reference types="Cypress"/>

describe('Forms, Buttons & Checkbox', () => {
  it('Submit And Assert Form', () => {
    // Load the form
    cy.visit('https://practice-automation.com/form-fields/')
    cy.get('[id="feedbackForm"]').should('be.visible')

    // Fill the form
    cy.get('[id="name"]').type('Peter')
    cy.contains('Water').click()
    cy.contains('Red').click()
    cy.get('#email').type('test@email.de')
    cy.get('#message').type('Dear Santa Claus, this year....')
    cy.get('#submit-btn').click()

    // Assert Form Details
  })
})