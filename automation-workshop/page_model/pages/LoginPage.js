import {Selector} from 'testcafe'

class LoginPage{

    constructor (){
        this.usernameField = Selector('input[name="user-name"]')
        this.userpasswordField = Selector('input[name="password"]')
        this.loginButton = Selector('input[id="login-button"]')
        this.errorMessage = Selector('#login_button_container > div > form > h3')
    }
}

export default new LoginPage()