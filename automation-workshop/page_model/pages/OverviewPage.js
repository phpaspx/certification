import {Selector} from 'testcafe'

class OverviewPage{
    constructor (){
            this.pageTitle = Selector('#contents_wrapper > div.subheader') 
            this.FinishButton = Selector('#checkout_summary_container > div > div.summary_info > div.cart_footer > a.btn_action.cart_button')
    }
}

export default new OverviewPage()
