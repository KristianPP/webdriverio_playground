"use strict";
class GeneralPage {
	constructor() {
		this.title = 'My Page';
	}

	open(path) {
		browser.url(path);
	}
}
module.exports = GeneralPage;