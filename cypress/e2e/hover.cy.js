/// <reference types="Cypress"/>

describe('Test Hover', () => {
  it('passes', () => {
    // cy.viewport(800, 600)
    cy.viewport("ipad-2")
    cy.visit('https://practice-automation.com/')
    cy.contains('Hover').should('be.visible').click()
    cy.get('#mouse_over').trigger('mouseover')
    cy.get('#mouse_over').should('contain','You did it!')
  })
})