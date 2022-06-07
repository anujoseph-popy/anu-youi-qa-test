/// <reference types="cypress" />

describe('A user visiting the home page', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'))
    })

    it('Should have valid links in Top Menu', () => {
        cy.get('.top-menu>li').each(($el) => {
            cy.checkLinkStatus($el.children('a').attr('href'));
        })
    })

    it('Should have valid links in category navigation', () => {
        cy.get('.block.block-category-navigation>.listbox>ul>li').each(($el) => {
            cy.checkLinkStatus($el.children('a').attr('href'));
        })
    })

    it('Should have valid links in manufacturer navigation', () => {
        cy.get('.block.block-manufacturer-navigation>.listbox>ul>li').each(($el) => {
            cy.checkLinkStatus($el.children('a').attr('href'));
        })
    })

    it('Should have valid links in tags', () => {
        cy.get('div.tags>ul>li').each(($el) => {
            cy.checkLinkStatus($el.children('a').attr('href'));
        })
    })

    it('Should have valid links in footer', () => {
        cy.get('.footer-menu-wrapper>.column>ul>li').each(($el) => {
            cy.checkLinkStatus($el.children('a').attr('href'));
        })
    })
})