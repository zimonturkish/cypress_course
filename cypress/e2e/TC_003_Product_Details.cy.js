/// <reference types="Cypress"/>

describe('TC_003_Product_Details', () => {
  it('Should verify the displayed product details', () => {
    
    // Load page
    cy.visit('https://www.demoblaze.com/')
    
    // Verify product on the page and click on it
    cy.get('.hrefch').contains('Nexus 6').click()

    // Verify that the product page has been opened
    cy.get('.product-deatil').should('be.visible')

    // Verify name product
    cy.get('h2.name').contains('Nexus 6').should('be.visible')

    // Verify price product
    cy.get('h3.price-container').should('contain', '$650') 
    
    // Verify button
    cy.get('.btn-success').contains('Add to cart')
  })
})