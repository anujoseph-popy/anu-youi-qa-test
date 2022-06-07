Cypress.Commands.add('checkLinkStatus', (link) => {
    cy.request(link)
        .then((response)=>{
            expect(response.status).to.eq(200)
        })
})

