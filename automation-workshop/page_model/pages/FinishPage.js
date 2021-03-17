import {Selector} from 'testcafe'

class FinishPage{
    constructor (){
            this.pageTitle = Selector('#contents_wrapper > div.subheader') 
    }
}

export default new FinishPage()