import {Selector} from 'testcafe'

class CartPage{

    constructor (){
        this.CheckoutButton = Selector('#cart_contents_container > div > div.cart_footer > a.btn_action.checkout_button') 
        this.CartTitle = Selector('#contents_wrapper > div.subheader')
    }
}

export default new CartPage()