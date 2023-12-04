class DeleteFromPanier {

    static DeleteItem () {
        cy.get('.showcart').should('be.visible').click();
        cy.get('.product-item-details > .actions > .secondary > .action', {timeout:9000}).should('be.visible').click();
        cy.get('.action-primary').click();
        
    }
}

export default DeleteFromPanier;