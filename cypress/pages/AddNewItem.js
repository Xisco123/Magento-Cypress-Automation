class New_Item {

    static Add_New_Item () {
        cy.get('#ui-id-5').trigger('mouseover').should('be.visible');
        cy.get('#ui-id-17').trigger('mouseover').should('be.visible');
        cy.get('#ui-id-17').should('be.visible').click();
        cy.get(':nth-child(5) > .pages > .items > :nth-child(4) > .page > :nth-child(2)').scrollIntoView().should('be.visible').click();
    }

}

export default New_Item;