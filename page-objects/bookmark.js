module.exports = {
    url: 'https://kerja.kitalulus.com/',

    elements: {
        searchtext: ".Search___StyledTextInput-sc-169rfat-9.TextInput__TextInputCss-sc-1snvhld-4.idloXI.lckpXD",
        bookmarkbutton: "div:nth-of-type(1) > .Between-sc-1120kxi-0.dDLQSp > div > .BookmarkButton___StyledButton-sc-10f0at4-0.gfCpcm > img[alt='bookmark default']",
        bookmarkedbutton:"img[alt='bookmark active']"
    },

    homepage: function() {
        return helpers.loadPage(page.bookmark.url).then(function() {
            driver.wait(until.elementLocated(by.css(page.bookmark.elements.searchtext)));
        });
    },

    searchtext: function(searchtextexpected) {
        return driver.findElement(by.css(page.bookmark.elements.searchtext, searchtextexpected))
    },

    inputtext: function(inputtextexpected) {
        return driver.findElement(by.css(page.bookmark.elements.searchtext)).sendKeys(inputtextexpected + "\n").then(function() {
            driver.wait(until.elementLocated(by.css(page.bookmark.elements.bookmarkbutton))).then(function() {
                driver.sleep(1000);
            });
        });
    },

    bookmarkbutton: function() {
        return driver.findElement(by.css(page.bookmark.elements.bookmarkbutton));
    },

    clickbookmarkbutton: function() {
        return driver.findElement(by.css(page.bookmark.elements.bookmarkbutton)).click().then(function() {
            driver.wait(until.elementLocated(by.css(page.bookmark.elements.bookmarkedbutton))).then(function() {
                driver.sleep(1000);
            });
        });
    },

    bookmarkedbutton: function() {
        return driver.findElement(by.css(page.bookmark.elements.bookmarkedbutton));
    }

};
