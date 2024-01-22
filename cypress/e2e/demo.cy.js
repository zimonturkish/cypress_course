/// <reference types="Cypress"/>

import ExamplePage from "../pages/examplePage"

describe('Cypress E2E Testing Demo', () => {
 beforeEach(() => {
    // cy.visit('https://example.com')})
    const examplePage = new ExamplePage()
    examplePage.openExamplePage()
 })

  afterEach(() => {
    cy.log("Running after each of my tests")
  })
 
  it('Assert Url and Title', () => {
    const examplePage = new ExamplePage()
    examplePage.assertUrl()
    examplePage.assertTitle()
  })

  it('Assert Element', () => {
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