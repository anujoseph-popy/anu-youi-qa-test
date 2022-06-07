/// <reference types="cypress" />

describe('A User registering with the details', () => {
    it("Should be able to successfully complete registration when right details are provided", () => {
        cy.visit(Cypress.env('baseUrl') + Cypress.env('registerPath'))
            .get('#gender-' + Cypress.env('rightCredentials').gender).check()
            .get('#FirstName').type(Cypress.env('rightCredentials').firstName)
            .get('#LastName').type(Cypress.env('rightCredentials').lastName)
            .get('#Email').type(Cypress.env('rightCredentials').email)
            .get('#Password').type(Cypress.env('rightCredentials').password)
            .get('#ConfirmPassword').type(Cypress.env('rightCredentials').password)
            .get('#register-button').click()
        cy.contains('Your registration completed')
            .get('.header-links').contains(Cypress.env('rightCredentials').email)
            .get('.header-links').contains('Log out')
    })

    it("Should be able to successfully logout", () => {
        cy.get("a.ico-logout").click()
        cy.url().should('equal', Cypress.env('baseUrl'))
        cy.get('.header-links').contains('Register')
            .get('.header-links').contains('Log in')
    })

    it("Should be able to log back in successfully with the credentials", () => {
        cy.visit(Cypress.env('baseUrl') + Cypress.env('loginPath'))
            .get('#Email').type(Cypress.env('rightCredentials').email)
            .get('#Password').type(Cypress.env('rightCredentials').password)
            .get('input.login-button').click()
        cy.url().should('equal', Cypress.env('baseUrl'))
            .get('.header-links').contains(Cypress.env('rightCredentials').email)
            .get('.header-links').contains('Log out')

    })
})