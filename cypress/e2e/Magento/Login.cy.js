import LoginPage from "../../support/page-objects/loginPage";
describe('Login Test with Fixtures and Page Object', () => {
  beforeEach(() => {
    // Visit the login page before each test
    LoginPage.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
  });

  it('should log in successfully with valid credentials from fixture', () => {
    // Load valid credentials from the fixture
    cy.fixture('loginCred.json').then(credentials => {
      LoginPage.fillCredentials(credentials.validCredentials.username, credentials.validCredentials.password);
      LoginPage.submitLogin();

      // Assert that login is successful
      cy.url().should('include', '/customer/account/');
      cy.contains('My Account').should('be.visible');
    });
  });

  it('should display an error message with invalid credentials from fixture', () => {
    // Load invalid credentials from the fixture
    cy.fixture('loginCred.json').then(credentials => {
      LoginPage.fillCredentials(credentials.invalidCredentials.username, credentials.invalidCredentials.password);
      LoginPage.submitLogin();

      // Assert that an error message is displayed
      LoginPage.getErrorMessage().should('be.visible');
    });
  });

  it('should display an error message with empty credentials from fixture', () => {
    // Load empty credentials from the fixture
    cy.fixture('loginCred.json').then(credentials => {
      LoginPage.fillCredentials(credentials.emptyCredentials.username, credentials.emptyCredentials.password);
      LoginPage.submitLogin();

      // Assert that an error message is displayed
      LoginPage.getErrorMessage('This is a required field.').should('be.visible');
    });
  });
});


 /* it('Failed Login - Locked User', () => {
    cy.visit('')
    cy.get('#user-name').type(Cypress.env('lockedUser'))
    cy.get('[data-test="password"]').type(userData.valid.valid_password)
    cy.get('[data-test="password"]').type(userData.invalid[1].invalid_pass)
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain', 'Sorry, this user has been locked out.')
  })
  it('Failed Login - Wrong password', () => {
    cy.visit('')
    cy.get('#user-name').type('standard_user')
    cy.get('[data-test="password"]').type(userData.invalid.invalid_pass)
    cy.get('[data-test="password"]').type(userData.invalid[0].invalid_pass)
    cy.get('.submit-button.btn_action').click()
    cy.get('[data-test="error"]').should('contain', 'Username and password do not match any user')
  })*/