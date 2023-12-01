/// <reference types="cypress" />
class CheckUrl {

    static checkUrlMagento (){
        cy.visit('https://magento.softwaretestingboard.com/')
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/')
    }
}

export default CheckUrl;