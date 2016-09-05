var page = require('./page')


var loginPage = Object.create(page, {

     /**
     * define  selctors for Home Page
     */
     nickname:           { value: 'span.nickname'},
     wofPopup:           { value: '.WOF-popup'},
     wheelCursor:        { value: '.wheel-cursor'},
     closePulse:         { value: 'button=Close'},
     slotsLink:          { value: 'a=Slots'},
     bingoLink:          { value: 'a=Bingo'},
     casinoLink:         { value: 'a=Casino'},
     pokerLink:          { value: 'a=Poker'},
     breadcrumbLink:     { value: '.nav.breadcrumb'},
     contentHeader:      { value: '.islet.flush--bottom'},
     gamesFilter:        { value: '.islet.grid.games-filter.js-games-filter'},
     bulletsGrid:        { value: '.no-bullets.grid'},
     playerActivities:   { value: '.main__aside.box'},
     searchField:        { value: '#ctl00_cphNavAndSearch_ctl01_gameSearch'},
     searchIcon:         { value: '.game-search__button.btn.btn--search.js-game-search-button'},
     similarGames:       { value: '.push-half--top'},
     similarGamesHeader: { value: '.push-half--top h1'},
     similarGamesList:   { value: '.push-half--top li'},
     gameListSecond:     { value: '.push-half--top li:nth-child(2)'},
     language:           { value: '.select-language__button'},
     deLang:             { value: 'span=Deutsch'},
     logout:             { value: '.btn--link.js-logout'},
     

     /**
     * define  functions for Home Page
     */
     getNickNameText:                   { value: function () { return browser.getText(this.nickname); } },

     isWOFPopupExists:                  { value: function () { return browser.isExisting(this.wofPopup); } },
     clickWheelCursor:                  { value: function () {  browser.click(this.wheelCursor); } },
     closePulsePopup:                   { value: function () { return browser.click(this.closePulse); } },
     

     clickSlotsLink:                    { value: function () {  browser.click(this.slotsLink); } },
     clickBingoLink:                    { value: function () {  browser.click(this.bingoLink); } },
     clickCasinoLink:                   { value: function () {  browser.click(this.casinoLink); } },
     clickPokerLink:                    { value: function () {  browser.click(this.pokerLink); } },
     getBreadcrumbText:                 { value: function () { return browser.getText(this.breadcrumbLink); } },
     

     isContentHeaderVisible:            { value: function () { return browser.isVisible(this.contentHeader); } },
     isGamesFilterComponentVisible:     { value: function () { return browser.isVisible(this.gamesFilter); } },
     isBulltestGridlVisible:            { value: function () { return browser.isVisible(this.bulletsGrid); } },
     isPlayerActivityComponentVisible:  { value: function () { return browser.isVisible(this.playerActivities); } },

    
     searchGame:                        { value: function (searchText) {  browser.setValue(this.searchField, searchText); } },
     clickSearchLink:                   { value: function () {  browser.click(this.searchIcon); } },

     isSimilarGamesComponentVisible:    { value: function () { return browser.isVisible(this.similarGames); } },
     getSimilarGamesHeaderText:         { value: function () {  return browser.getText(this.similarGamesHeader); } },

     isGameListVisible:                 { value: function () { return browser.isVisible(this.similarGamesList); } },
     gameListElements:                  { value: function () {  return browser.elements(this.similarGamesList); } },
     clickGameLink:                     { value: function () {  browser.click(this.gameListSecond); } },

     /**
     * define function to change language 
     *(Mouse Hover issue observed intermittently while mouse hovering to Select Language)
     */
     selectDeLanguage: { value: function () { 

          //browser.moveTo(this.language);
          browser.scroll(this.language);
          browser.click(this.language);
          browser.moveToObject(this.language); 
          browser.pause(2000);
          browser.click(this.deLang);
     } },    

     /**
     * define function to logout
     */
     performLogout: { value: function () { 
          
          browser.scroll(this.nickname);
          browser.click(this.nickname);
          browser.moveToObject(this.nickname); 
          browser.pause(2000);
          browser.click(this.logout);
     } },

      /**
     * define function to logout
     */
     handleWOFPopup: { value: function () { 
          
          browser.pause(5000);
          browser.click(this.wheelCursor);
          browser.pause(15000);
          browser.click(this.closePulse); 
          
     } },

      /**
     * Explicit wait time
     */
     waitForLoading: { value: function (seconds) { 
          
          browser.pause(seconds*1000);
     } },

    /**
     * define or overwrite page methods
     */
     open: { value: function() {
        page.open.call(this, 'en');
     } },

    
});

module.exports = loginPage
