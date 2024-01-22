/// <reference types="Cypress"/>

describe('Cypress Files', () => {
  // how to write a JSON file
  it('Read/Write into JSON file', () => {
    cy.writeFile('test-data/data.json', {name: 'Peter', email: 'peter@email.de'})

    // how to read and test a JSON file
    cy.readFile('test-data/data.json').then((user) => {
    expect(user.name).to.equal('Peter'),
    expect(user.email).to.equal('peter@email.de')
  })
  })

  //how to write a plain text file
  it('Write into plain text file', () => {
    cy.writeFile('test-data/plain.txt', 'Hello World', 'ascii')
  })

})