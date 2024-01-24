class ExamplePage {
    openExamplePage() {
        cy.visit('/')
    }

    assertUrl() {
        const baseUrl = Cypress.config('baseUrl')
        cy.url().should('contain', `${baseUrl}`)
    }

    assertTitle() {
        cy.title().should('contain', 'Domain')
    }
}

export default ExamplePage