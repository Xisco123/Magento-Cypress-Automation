class New_Item {

    static Add_New_Item () {
        cy.get('#ui-id-5').trigger('mouseover').should('be.visible');
        cy.get('#ui-id-17').trigger('mouseover').should('be.visible');
        cy.get('#ui-id-17').should('be.visible').click();
        cy.get(':nth-child(5) > .pages > .items > :nth-child(4) > .page > :nth-child(2)').scrollIntoView().should('be.visible').click();
        cy.get(':nth-child(4) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').should('be.visible').click();
        cy.get('#product-price-190 > .price').should('have.text', '$69.00');
        cy.get('#option-label-size-143-item-166').should('be.visible').click();
        cy.get('#option-label-color-93-item-53').should('be.visible').click();
        




    }

}

export default New_Item;