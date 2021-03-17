import WelcomePage from '../pages/WelcomePage'
import LoginPage from '../pages/LoginPage'
import MyNotesPage from '../pages/MyNotesPage'
import ProductsPage from '../pages/ProductsPage'
import ShoppingCart from '../pages/ShoppingCart'
import CartPage  from '../pages/CartPage'
import CheckOutPage from '../pages/CheckOutPage'
import OverviewPage from '../pages/OverviewPage'
import FinishPage from '../pages/FinishPage'
import { CREDENTIALS } from '../data/Constants'
import { USER_DATA } from '../data/UserData'


fixture('Login feature testing')
    .page `https://www.saucedemo.com/`

     
test('1. Login with a valid user', async t => {
    await  t         
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userpasswordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(ProductsPage.pageTitle.exists).ok()
}) 

test('2. Login with an invalid user', async t => {
    await  t       
        .typeText(LoginPage.usernameField,CREDENTIALS.INVALID_USER.USERNAME)
        .typeText(LoginPage.userpasswordField,CREDENTIALS.INVALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(LoginPage.errorMessage.exists).ok()  
})

test('3. Logout from product´s page ', async t => {
    await  t         
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userpasswordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(ProductsPage.pageTitle.exists).ok()

    await  t
        .click(ProductsPage.lateralMenu)
        .click(ProductsPage.logoutLink)
    
    await t.expect(LoginPage.loginButton.exists).ok()  
}) 


test('4. Navigate to the shopping cart', async t => {
    await  t         
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userpasswordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(ProductsPage.pageTitle.exists).ok()

    await  t
        .click(ProductsPage.FirstProductLink)    

    await t.expect(ShoppingCart.pageTitle.exists).ok()     
}) 


test('5. Add a single item to the shopping cart', async t => {
    await  t         
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userpasswordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(ProductsPage.pageTitle.exists).ok()

    await  t
        .click(ProductsPage.AddToCardButton)    

    await t.expect(ProductsPage.RemoveButton.exists).ok()    
     
}) 

test('6. Add multiple items to the shipping cart', async t => {
    await  t         
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userpasswordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(ProductsPage.pageTitle.exists).ok()

    await  t
        .click(ProductsPage.AddToCardButton)    
    await t.expect(ProductsPage.RemoveButton.exists).ok()    

    await  t
        .click(ProductsPage.AddToCardButton2)    
    await t.expect(ProductsPage.RemoveButton2.exists).ok()    
     
}) 
 

test('7. Continue with missing Zip/Postal Code', async t => {
    await  t         
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userpasswordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(ProductsPage.pageTitle.exists).ok()

    await  t
        .click(ProductsPage.AddToCardButton)    
    await t.expect(ProductsPage.RemoveButton.exists).ok()    

    await  t
        .click(ProductsPage.CartIcon)    

     await t.expect(CartPage.CartTitle.exists).ok()

     await  t
        .click(CartPage.CheckoutButton) 

    await t.expect(CheckOutPage.CheckOutpageTitle.exists).ok()
        
    await  t
        .typeText(CheckOutPage.FirstName,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(CheckOutPage.LastName,CREDENTIALS.VALID_USER.PASSWORD)
        .click(CheckOutPage.ContinueButton)

    await t.expect(CheckOutPage.error.exists).ok() 
}) 


test('8. Fill user´s information', async t => {
    await  t         
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userpasswordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(ProductsPage.pageTitle.exists).ok()

    await  t
        .click(ProductsPage.AddToCardButton)    
    await t.expect(ProductsPage.RemoveButton.exists).ok()    

    await  t
        .click(ProductsPage.CartIcon)    

     await t.expect(CartPage.CartTitle.exists).ok()

     await  t
        .click(CartPage.CheckoutButton) 

    await t.expect(CheckOutPage.CheckOutpageTitle.exists).ok()
        
    await  t
        .typeText(CheckOutPage.FirstName,'first')
        .typeText(CheckOutPage.LastName,'last')      
        .typeText(CheckOutPage.zipCode,'12345')      
        .click(CheckOutPage.ContinueButton)

        
    await t.expect(OverviewPage.pageTitle.exists).ok()
 
}) 
 

test('10. Complete a purchase', async t => {
    await  t         
        .typeText(LoginPage.usernameField,CREDENTIALS.VALID_USER.USERNAME)
        .typeText(LoginPage.userpasswordField,CREDENTIALS.VALID_USER.PASSWORD)
        .click(LoginPage.loginButton)

    await t.expect(ProductsPage.pageTitle.exists).ok()

    await  t
        .click(ProductsPage.AddToCardButton)    
    await t.expect(ProductsPage.RemoveButton.exists).ok()    

    await  t
        .click(ProductsPage.CartIcon)    

     await t.expect(CartPage.CartTitle.exists).ok()

     await  t
        .click(CartPage.CheckoutButton) 

    await t.expect(CheckOutPage.CheckOutpageTitle.exists).ok()
        
    await  t
        .typeText(CheckOutPage.FirstName,'first')
        .typeText(CheckOutPage.LastName,'last')      
        .typeText(CheckOutPage.zipCode,'12345')      
        .click(CheckOutPage.ContinueButton)

        
    await t.expect(OverviewPage.pageTitle.exists).ok()
 
    await  t             
        .click(OverviewPage.FinishButton)

    await t.expect(FinishPage.pageTitle.exists).ok()
        
        
}) 