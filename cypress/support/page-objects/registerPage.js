class RegisterPage {
    visit(url) {
        cy.visit(url);
    }
  
    fillCredentials(firstName, lastName, emailAddress, password) {
        cy.get('#firstname').type(firstName);
        cy.get('#lastname').type(lastName);
        cy.get('#email_address').type(emailAddress);
        cy.get('#password').type(password);
        cy.get('#password-confirmation').type(password);
    }
  
    submitRegister() {
        cy.get('button[title="Create an Account"]').click();
    }
  
    getErrorMessage(errorMsg) {
      return cy.contains(errorMsg).should('be.visible');
    }
  }
  
  export default new RegisterPage();
  