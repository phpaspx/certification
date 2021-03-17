import {Selector} from 'testcafe'

class ProductsPage{
    constructor (){
            this.pageTitle = Selector('#header_container > div.header_label > div')
            this.lateralMenu = Selector('#react-burger-menu-btn')
            this.logoutLink = Selector('#logout_sidebar_link')
            this.FirstProductLink = Selector('#item_4_img_link > img')
            this.AddToCardButton = Selector('#inventory_container > div > div:nth-child(1) > div.pricebar > button')
            this.AddToCardButton2 = Selector('#inventory_container > div > div:nth-child(3) > div.pricebar > button')
            this.RemoveButton = Selector('#inventory_container > div > div:nth-child(1) > div.pricebar > button')
            this.RemoveButton2 = Selector('#inventory_container > div > div:nth-child(3) > div.pricebar > button')
            this.CartIcon = Selector('#shopping_cart_container > a > svg')
    }
}

export default new ProductsPage()