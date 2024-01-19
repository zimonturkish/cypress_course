/// <reference types="Cypress"/>

describe('Cypress E2E Testing Demo', () => {
 beforeEach(() => {
  cy.visit('https://example.com')})
  afterEach(() => {
    cy.log("Running after each of my tests")
  })
 
  it('Assert Url', () => {
    // cy.visit('https://example.com')
    cy.url().should('contain', 'example.com')

  })

  it('Assert Title', () => {
    // cy.visit('https://example.com')
    cy.title().should('contain', 'Domain')
  })

  it('Assert Element', () => {
    // cy.visit('https://example.com')
    cy.get('h1').should('be.visible')
    cy.wait(2000)
    cy.get('p').should('be.visible')
  })

  it('Reload and Logs', () => {
    cy.visit('https://example.com')
    cy.log('Before reload')
    cy.reload()
    cy.log('After reload')
  })
})