
class CreateAccount {

     static NewAccount (FirstName, LastName, Email, Password, ConfirmPassword){
        
        cy.get('.panel > .header > :nth-child(3) > a').should('be.visible').click();
        cy.get('.base').should('have.text', 'Create New Customer Account');
        cy.get('#firstname').should('be.empty').type(FirstName);
        cy.get('#lastname').should('be.empty').type(LastName);
        cy.get('#email_address').should('be.empty').type(Email);
        cy.get('#password').should('be.empty').type(Password);
        cy.get('#password-confirmation').should('be.empty').type(ConfirmPassword);
        cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').should('be.visible').click();
                
    }
    
}
export default CreateAccount;