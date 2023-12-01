import CheckUrl from "../../pages/checkUrlMagento";
import New_Item from "../../pages/AddNewItem";
import SignIn from "../../pages/SignIn";

it('Add New Item for Men to Bagg', () => {
    CheckUrl.checkUrlMagento();
    SignIn.SignInMagento('nicolas@test.ca', 'Nicolas@123');
    New_Item.Add_New_Item();
})