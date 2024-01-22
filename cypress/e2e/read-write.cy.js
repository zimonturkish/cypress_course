/// <reference types="Cypress"/>

// how to write a JSON file
describe('Read/Write into JSON file', () => {
  it('passes', () => {
    cy.writeFile('test-data/data.json', {name: 'Peter', email: 'peter@email.de'})
    cy.readFile('test-data/data.json').then((user) => {
    expect(user.name).to.equal('Peter'),
    expect(user.email).to.equal('peter@email.de')
  })
})
})