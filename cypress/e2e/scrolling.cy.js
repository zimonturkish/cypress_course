/// <reference types="Cypress"/>

describe('Scrolling in Cypress', () => {
  it('scrolling into footer view', () => {
    cy.visit('https://practice-automation.com/')
    cy.get('footer').scrollIntoView()
})
})