import {Selector} from 'testcafe'

class ShoppingCart{
    constructor (){
            this.pageTitle = Selector('#header_container > div.header_label') 
    }
}

export default new ShoppingCart()