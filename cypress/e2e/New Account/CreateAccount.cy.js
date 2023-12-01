import CheckUrl from "../../pages/checkUrlMagento";
import CreateAccount from "../../pages/CreateAccount";

it('Launch Url', () => {
    
    CheckUrl.checkUrlMagento();
})


it('Create a New Account', (FirstName, LastName, Email, Password, ConfirmPassword) => {
    CheckUrl.checkUrlMagento();
    CreateAccount.NewAccount('Nicolas', 'Gauthier', 'nicolas@test.ca', 'Nicolas@123', 'Nicolas@123');
    

})