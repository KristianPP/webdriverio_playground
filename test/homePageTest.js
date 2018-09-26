let expect = require('chai').expect;
let HomePage = require('../pages/HomePage');

describe('Test Adidas Home Page', () => {
    it('Should have the hero carousel', function () {
       HomePage.open();
       expect(HomePage.heroImage).to.exist;
       browser.pause(3000);
    });
    it('carousel should exist and be scrollable', function () {
        HomePage.clickFirstItem();
        expect(HomePage.productTitle).to.exist;
    });
});