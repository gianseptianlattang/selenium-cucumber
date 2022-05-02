module.exports = function () {

    this.Given(/^User on the Kitalulus homepage$/, function () {
        return page.bookmark.homepage();
    });

    this.Then(/^User should see "([^"]*)"$/, function (searchtext) {
        return page.bookmark.searchtext(searchtext);
    });

    this.When(/^User can input "([^"]*)" to search vacancy$/, function (inputtext) {
        return page.bookmark.inputtext(inputtext);
    });

    this.Then(/^User should see bookmark button$/, function () {
        return page.bookmark.bookmarkbutton();
    });

    this.When(/^User can click bookmark button$/, function () {
        return page.bookmark.clickbookmarkbutton();
    });

    this.Then(/^User should see bookmark button with red background$/, function () {
        return page.bookmark.bookmarkedbutton();
    });






};
