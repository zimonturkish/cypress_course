/// <reference types="Cypress"/>

describe('Cpress  Screenshots', () => {
  it('Full page screenshots', () => {
    cy.visit('https://example.com')
    cy.screenshot({ overwrite:true})
  })

  it('Single Element Screenshot', () => {
    cy.visit('https://example.com')
    cy.get('h1').screenshot({ overwrite:true})
  })
})