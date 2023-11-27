import RegisterPage from "../../../support/page-objects/registerPage";
describe('Register Test with Fixtures and Page Object', () => {
  beforeEach(() => {
    // Visit the login page before each test
    RegisterPage.visit('https://magento.softwaretestingboard.com/customer/account/create/');
  });

  it('should register successfully with valid credentials from fixture', () => {
    // Load valid credentials from the fixture
    cy.fixture('registerCred.json').then(credentials => {
      RegisterPage.fillCredentials(credentials.validCredentials.firstName, credentials.validCredentials.lastName, credentials.validCredentials.emailAddress, credentials.validCredentials.password);
      RegisterPage.submitRegister();

      // Assert that register is successful
      cy.url().should('include', '/customer/account/');
      cy.get('.page-title').contains('My Account').should('be.visible');
    });
  });

  it('should display an error message with the same credentials that has been registered before', () => {
    // Load valid credentials from the fixture
    cy.fixture('registerCred.json').then(credentials => {
      RegisterPage.fillCredentials(credentials.validCredentials.firstName, credentials.validCredentials.lastName, credentials.validCredentials.emailAddress, credentials.validCredentials.password);
      RegisterPage.submitRegister();

      // Assert that register is successful
      RegisterPage.getErrorMessage('There is already an account with this email address.');
    });
  });

  it('should display an error message with empty credentials', () => {

    cy.fixture('registerCred.json').then(credentials => {
      RegisterPage.submitRegister();

      // Assert that an error message is displayed
      RegisterPage.getErrorMessage('This is a required field.');
    });
  });


});
