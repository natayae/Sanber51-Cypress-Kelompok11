class LoginPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
    }
  
    fillCredentials(username, password) {
      cy.get('#email').type('nat@mailnator.com');
      cy.get('#pass').type('Magent0123');
    }
  
    submitLogin() {
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
    }
  
    getErrorMessage() {
      return cy.contains('Invalid login or password.');
    }
  }
  
  export default new LoginPage();
  