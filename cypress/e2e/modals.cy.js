/// <reference types="Cypress"/>

describe('Cypress Modals', () => {
  it('Open and assert modal', () => {
    cy.visit('https://practice-automation.com/')
    //cy.contains('Accept').click()
    cy.contains('Modals').click()
    cy.get('#simpleModal').click()
    cy.get('.pum-title').should('be.visible')
    cy.get('p').contains('Hi, I’m a simple modal.').should('be.visible')
    // Fehler: unmöglich to close popup
    cy.get('#popmake-1318' ).find('button').click();
  })
})