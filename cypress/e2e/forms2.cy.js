/// <reference types="Cypress"/>

describe('Forms, Buttons & Checkbox', () => {
  it('Submit And Assert Form', () => {
    // Variables for Data
    const name = 'Mustermann'
    const vorname = 'Peter'
    const email = 'test@email.de'
    const adresse = 'Mariannenplatz 5'
    const postleitzahl = '10997'

    // Load the form
    cy.visit('http://localhost:8080/form.html')
    cy.get('[class="myform"]').should('be.visible')

    // Fill the form
    cy.get('[id="name"]').type(name)
    cy.get('#vorname').type(vorname)
    cy.get('#email').type(email)
    cy.get('#adresse').type(adresse)
    cy.get('#postleitzahl').type(postleitzahl)
    cy.get('#datenschutzerklaerung').click()
    cy.get('#submit-btn').click() 

    // Assert Form Details
    cy.get('.submitted-data').should('be.visible')
    cy.get('#dataName').should('contain', name)
    cy.get('#dataVorname').should('contain', vorname)
    cy.get('#dataEmail').should('contain', email)
    cy.get('#dataAdresse').should('contain', adresse)
    cy.get('#dataPostleitzahl').should('contain', postleitzahl)
  
  })
})