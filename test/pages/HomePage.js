var GeneralPage = require('./GeneralPage.js')

var HomePage = Object.create(GeneralPage, {
    /**
     * define elements
     */
    heroImage: { get: function () { return browser.element('section[class*="main"] [class*="content"]>[class*="wallpaperWrapper"]'); } },
    carousel: { get: function () { return browser.element('div[data-auto-id="carousel-slider"]'); } },
    carouselItem: { get: function () { return browser.element('div[data-auto-id="carousel-slider"] div'); } },
    productTitle: { get: function () { return browser.element('div[data-auto-id="product-title"]'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        GeneralPage.open.call(this, '/');
        
    } },

    clickFirstItem: { value: function() {
        this.carouselItem.click().waitForExist(5000);
    } }
});

module.exports = HomePage;