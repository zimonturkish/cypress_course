/// <reference types="Cypress"/>

describe('Data Tables', () => {
  it('Validate items inside data tables', () => {
    cy.visit('https://practice-automation.com/tables/')
    cy.get('.wp-block-table').within(() =>{
      cy.get('td').eq(0).should('contain', 'Item') 
      cy.get('td').eq(1).should('contain', 'Price') 
      cy.get('td').eq(3).should('contain', '$3.99')
    })

    cy.get('#tablepress-1').within(() =>{
      cy.get('.column-1').eq(0).should('contain','Rank')
      cy.get('.column-1').eq(1).should('contain','1')
      cy.get('.column-3').eq(0).should('contain','Population (million)')
      
    })
  })
})