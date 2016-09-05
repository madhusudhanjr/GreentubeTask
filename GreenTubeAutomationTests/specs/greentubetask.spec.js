var expect = require('chai').expect;
var LoginPage = require('../pageobjects/loginpage');
var HomePage = require('../pageobjects/homepage');

describe('GameTwist Tests: ', function (done) {

    it('successful login', function () {

       LoginPage.open();
       LoginPage.acceptAlert();
       LoginPage.setUserName('mjr17');
       LoginPage.setPassword('P@ssword');
       LoginPage.clickLogIn();

       LoginPage.waitForLoading(10);
       expect(HomePage.getNickNameText()).to.contain('mjr17');

       if (HomePage.isWOFPopupExists())
            HomePage.handleWOFPopup();
            
                     
    });

    it('Navigate to Slots Page and verify components', function () {
      
        
       HomePage.clickSlotsLink();
       HomePage.waitForLoading(3);
       expect(HomePage.getBreadcrumbText()).to.contain('Slots');
       expect(HomePage.isContentHeaderVisible()).to.be.equal(true);
       expect(HomePage.isGamesFilterComponentVisible()).to.be.equal(true);
       expect(HomePage.isBulltestGridlVisible()).to.be.equal(true);
       expect(HomePage.isPlayerActivityComponentVisible()).to.be.equal(true);
      
              
    });

    it('Navigate to Bingo Page and verify components', function () {
      
        
       HomePage.clickBingoLink();
       HomePage.waitForLoading(3);
       expect(HomePage.getBreadcrumbText()).to.contain('Bingo');
       expect(HomePage.isContentHeaderVisible()).to.be.equal(true);
       expect(HomePage.isGamesFilterComponentVisible()).to.be.equal(true);
       expect(HomePage.isBulltestGridlVisible()).to.be.equal(true);
       expect(HomePage.isPlayerActivityComponentVisible()).to.be.equal(true);
      
              
    });

    it('Navigate to Casino Page and verify components', function () {
      
        
       HomePage.clickCasinoLink();
       expect(HomePage.getBreadcrumbText()).to.contain('Casino');
       expect(HomePage.isContentHeaderVisible()).to.be.equal(true);
       expect(HomePage.isGamesFilterComponentVisible()).to.be.equal(true);
           
              
    });

    it('Navigate to Poker Page and verify components', function () {
      
        
       HomePage.clickPokerLink();
       HomePage.waitForLoading(3);
       expect(HomePage.getBreadcrumbText()).to.contain('Poker');
       expect(HomePage.isContentHeaderVisible()).to.be.equal(true);
       expect(HomePage.isGamesFilterComponentVisible()).to.be.equal(true);
       expect(HomePage.isPlayerActivityComponentVisible()).to.be.equal(true);
      
              
    });

    it('Search Game and verify Similar Games component', function () {

      
       HomePage.searchGame('Slots');
       HomePage.waitForLoading(3);
       HomePage.clickSearchLink();
       HomePage.waitForLoading(5);

       expect(HomePage.isSimilarGamesComponentVisible()).to.be.equal(true);
       expect(HomePage.getSimilarGamesHeaderText()).to.contain('Similar games');

       console.log(HomePage.gameListElements().length);
       HomePage.clickGameLink();
       HomePage.waitForLoading(10);
              
    });

    it('Change locale to De ', function () {
           
        HomePage.selectDeLanguage();
              
    });

    it('logout', function () {
           
        HomePage.performLogout();
              
    });


});
