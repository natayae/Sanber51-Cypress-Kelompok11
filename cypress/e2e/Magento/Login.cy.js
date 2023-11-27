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
      cy.url('https://magento.softwaretestingboard.com/').should('include', '/customer/account/');
      cy.contains('My Account').should('be.visible');
    });
  });

  it('should display an error message with invalid credentials from fixture', () => {
    // Load invalid credentials from the fixture
    cy.fixture('loginCred.json').then(credentials => {
      LoginPage.fillCredentials(credentials.invalidCredentials.username, credentials.invalidCredentials.password);
      LoginPage.submitLogin();

      // Assert that an error message is displayed
      LoginPage.getErrorMessage('This is a required field.').should('be.visible');
    });
  });

  it('should display an error message with empty credentials from fixture', () => {
    // Load empty credentials from the fixture
    cy.fixture('loginCred.json').then(credentials => {
      LoginPage.fillCredentials(credentials.emptyCredentials.username, credentials.emptyCredentials.password);
      LoginPage.submitLogin();

      // Assert that an error message is displayed
      LoginPage.getErrorMessage('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible');
    });
  });
});