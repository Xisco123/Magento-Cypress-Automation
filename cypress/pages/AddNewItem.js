class New_Item {

    static Add_New_Item () {
        cy.get('#ui-id-5').trigger('mouseover').should('be.visible');
        cy.get('#ui-id-17').trigger('mouseover').should('be.visible');
        cy.get('#ui-id-17').should('be.visible').click();
        cy.get('.swatch-opt-706 > .size > .swatch-attribute-options > #option-label-size-143-item-166').should('be.visible').click();
        cy.get('#product-price-724 > .price').should('have.text', '$18.00');
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
        cy.get('#product-addtocart-button').click();
        cy.get('#option-label-size-143-item-166').click();
        cy.get('#option-label-color-93-item-50').click();
        cy.get('#product-addtocart-button').click();

    }

}

export default New_Item;