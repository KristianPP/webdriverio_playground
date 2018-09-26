var GeneralPage = require('./GeneralPage.js')

var HomePage = Object.create(GeneralPage, {
    /**
     * define elements
     */
    heroImage: getElement('section[class*="main"] [class*="content"]>[class*="wallpaperWrapper"]'),
    carousel: getElement('div[data-auto-id="carousel-slider"]'),
    carouselItem: getElement('div[data-auto-id="carousel-slider"] div'),
    productTitle: getElement('[data-auto-id="product-title"]'),
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        GeneralPage.open.call(this, '/');
        
    } },

    clickFirstItem: { value: function() {
        this.carouselItem.click();
        this.productTitle.waitForExist(5000);
    } }
});

function getElement(selector){
    return { get: function () { return browser.element(selector); } }
}
module.exports = HomePage;