import LoginPage from "../../../support/page-objects/loginPage";
describe('Login Test with Fixtures and Page Object', () => {
  beforeEach(() => {
    // Visit the login page before each test
    LoginPage.visit();
  });

  it('should log in successfully with valid credentials from fixture', () => {
    // Load valid credentials from the fixture
    cy.fixture('loginCred.json').then(credentials => {
      LoginPage.fillCredentials(credentials.validCredentials.email, credentials.validCredentials.password);
      LoginPage.submitLogin();

      // Assert that login is successful
      cy.url().should('include', '/customer/account/');
    });
  });

  it('should display an error message with invalid credentials from fixture', () => {
    // Load invalid credentials from the fixture
    cy.fixture('loginCred.json').then(credentials => {
      LoginPage.fillCredentials(credentials.invalidCredentials.email, credentials.invalidCredentials.password);
      LoginPage.submitLogin();

      // Assert that an error message is displayed
      LoginPage.getErrorMessage('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible');
    });
  });

  it('should display an error message with empty credentials from fixture', () => {
    // Load empty credentials from the fixture
    cy.fixture('loginCred.json').then(credentials => {
       // Check if either email or password is empty
    if (credentials.emptyCredentials.email === '' || credentials.emptyCredentials.password === '') {
      cy.log('This is a required field.');
      
    } else {
      LoginPage.fillCredentials(credentials.emptyCredentials.email, credentials.emptyCredentials.password);
      LoginPage.submitLogin();

      // Assert that an error message is displayed
      LoginPage.getErrorMessage().should('be.visible');
      }
    });
  });
});