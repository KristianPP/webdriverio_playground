function GeneralPage () {
    this.title = 'My Page';
}

GeneralPage.prototype.open = function (path) {
	 var windowHandle = browser.windowHandle();
    browser.url(path).windowHandleMaximize('{'+windowHandle.value+'}');
}

module.exports = new GeneralPage()