"use strict";
let GeneralPage = require('./GeneralPage.js')
function getElement(selector){
   return browser.element(selector);
}
class HomePage extends GeneralPage{
    get heroImage(){return getElement('section[class*="main"] [class*="content"]>[class*="wallpaperWrapper"]');}
    get carousel(){return getElement('div[data-auto-id="carousel-slider"]');}
    get carouselItem(){return getElement('div[data-auto-id="carousel-slider"] div');}
    get productTitle(){return getElement('[data-auto-id="product-title"]');}

     open() {
        super.open('/');
    }
    clickFirstItem() {
        this.carouselItem.click();
        this.productTitle.waitForExist(5000);
    }
}
function getElement(selector){
   return browser.element(selector);
}
module.exports = new HomePage();