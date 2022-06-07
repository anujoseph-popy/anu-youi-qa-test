/// <reference types="cypress" />

describe('A User browsing the products', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl') + 'books')
    })

    it("Should be able to add items to cart", () => {
        cy.get(".button-2.product-box-add-to-cart-button").each(($el, index) => {
            cy.get($el).click()
                .wait(3000)
                .get('.cart-qty').should('contain.text', "(" + (index + 1) + ")")
        })
    })
})