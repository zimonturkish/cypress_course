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
    //cy.get('[class="myform"]').should('be.visible')
    cy.getByClass('myform').should('be.visible')  

    // Fill the form
    //cy.get('#name').type(name)
    cy.getById('name').type(name)
    cy.getById('vorname').type(vorname)
    cy.getById('email').type(email)
    cy.getById('adresse').type(adresse)
    cy.getById('postleitzahl').type(postleitzahl)
    cy.getById('datenschutzerklaerung').click()
    cy.getById('submit-btn').click() 

    // Assert Form Details
    cy.getByClass('submitted-data').should('be.visible')
    cy.getById('dataName').should('contain', name)
    cy.getById('dataVorname').should('contain', vorname)
    cy.getById('dataEmail').should('contain', email)
    cy.getById('dataAdresse').should('contain', adresse)
    cy.getById('dataPostleitzahl').should('contain', postleitzahl)
  
  })
})