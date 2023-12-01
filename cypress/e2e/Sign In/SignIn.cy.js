import SignIn from "../../pages/SignIn";
import CheckUrl from "../../pages/checkUrlMagento";


it('Login Page test', () => {
    CheckUrl.checkUrlMagento();
    SignIn.SignInMagento();
})