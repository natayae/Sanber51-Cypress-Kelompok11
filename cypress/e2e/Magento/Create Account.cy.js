describe('Magento Signup Test', () => {
  it('should sign up a new user', () => {
    // Visit the signup page
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');

    // Fill out the registration form
    cy.get('#firstname').type('Nataya');
    cy.get('#lastname').type('Apriliani');
    cy.get('#email_address').type('natayatayo@gmail.com');
    cy.get('#password').type('your_password');
    cy.get('#password-confirmation').type('your_password');

    // Submit the form
    cy.get('button[title="Create an Account"]').click();

    // Assertion: Check if the registration is successful
    /*cy.url().should('include', '/customer/account/');
    cy.contains('Thank you for registering with Magento!');*/
  });
});
