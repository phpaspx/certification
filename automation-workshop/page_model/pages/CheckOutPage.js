import {Selector} from 'testcafe'

class CheckOutPage{
    constructor (){
            this.CheckOutpageTitle = Selector('#header_container > div.header_label > div') 
            this.FirstName = Selector('#first-name')
            this.LastName = Selector('#last-name')
            this.zipCode = Selector('#postal-code')
            this.ContinueButton = Selector('#checkout_info_container > div > form > div.checkout_buttons > input')
            this.error = Selector('#checkout_info_container > div > form > h3')
    }
}

export default new CheckOutPage()