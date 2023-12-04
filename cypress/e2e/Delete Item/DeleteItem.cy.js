import SignIn from "../../pages/SignIn";
import CheckUrl from "../../pages/checkUrlMagento";
import DeleteFromPanier from "../../pages/DeleteItem";
import New_Item from "../../pages/AddNewItem";


it('Delte item from Panier', () => {

    CheckUrl.checkUrlMagento();
    SignIn.SignInMagento();
    New_Item.Add_New_Item();
    DeleteFromPanier.DeleteItem();

})