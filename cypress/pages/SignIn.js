class SignIn {

    static SignInMagento (Email, Password) {

        cy.get('.panel > .header > .authorization-link > a').should('be.visible').click();
        cy.get('.base').should('have.text', 'Customer Login');
        cy.get('#email').should('be.empty').type('nicolas@test.ca');
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').should('be.empty').type('Nicolas@123');
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').should('be.visible').click();
        cy.get(':nth-child(2) > .greet > .logged-in').contains('Welcome, Nicolas Gauthier');
    }

}
export default SignIn;