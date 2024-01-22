/// <reference types="Cypress"/>

describe('Read/Write into JSON file', () => {
  it('passes', () => {
    cy.writeFile('test-data/data.json', {name: 'Peter', email: 'peter@email.de'})
  })
})