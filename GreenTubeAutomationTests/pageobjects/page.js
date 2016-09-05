function Page () {
}

Page.prototype.open = function (path) {
    browser.url('/' + path)
    browser.windowHandleMaximize('current')
}

   
module.exports = new Page()
