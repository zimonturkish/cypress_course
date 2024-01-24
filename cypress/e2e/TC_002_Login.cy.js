/// <reference types="Cypress"/>

describe('TC_002_Login', () => {
  it('Should login and logout from application', () => {
    cy.visit('https://www.demoblaze.com/')
    
    // login
    cy.get('#login2').click()
    cy.get('#logInModal').should('be.visible')
    cy.wait(2000)
    cy.get('#loginusername').type('test', { force:true })
    cy.get('#loginpassword').type('test', { force:true })
    cy.get('.btn-primary').contains('Log in').click()
    cy.get('#nameofuser').contains('Welcome test')
    
    // logout
    cy.wait(2000)
    cy.get('#logout2').click()
  })
})