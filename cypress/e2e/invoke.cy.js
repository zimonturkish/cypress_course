/// <reference types="Cypress"/>

describe('Execute javascript code inside cypress', () => {
  it('Invoke calculation of numbers', () => {
    const fn = (a, b, c) => {
      return a + b + c
    }
    cy.wrap({sum: fn}).invoke('sum', 2,3,5).should('be.greaterThan',3).and('be.lessThan', 20)
  })
})