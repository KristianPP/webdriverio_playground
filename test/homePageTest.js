var expect = require('chai').expect;
var HomePage = require('./pages/HomePage');

describe('Test Adidas Home Page', function() {
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