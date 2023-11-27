class LoginPage {
    visit() {
      cy.visit('/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS9jdXN0b21lci9hY2NvdW50L2xvZ291dFN1Y2Nlc3Mv/');
    }
  
    fillCredentials(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
    }
  
    submitLogin() {
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click();
    }
  
    getErrorMessage(errorMsg) {
      return cy.contains(errorMsg).should('be.visible');
    }
  }
  
  export default new LoginPage();
  