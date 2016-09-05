var page = require('./page')


var loginPage = Object.create(page, {

     /**
     * define  selctors for Login Page
     */
     alert:         { value: 'button=OK'},
     username:      { value: "[name='login-nickname']"},
     password:      { value: '#login-password'},
     logInButton:   { value: 'span=LOG IN'},

     /**
     * define  functions for Login Page
     */
     acceptAlert: { value: function () {  browser.click(this.alert); } },
     setUserName: { value: function (userId) {  browser.setValue(this.username, userId); } },    
     setPassword: { value: function (pwd) {  browser.setValue(this.password, pwd); } },
     clickLogIn:  { value: function () {  browser.click(this.logInButton); } },
     

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
