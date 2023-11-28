const { select } = require("async");

describe('template spec', () => {
  it('passes', () => {
    //visit ke web utama
    cy.visit('https://magento.softwaretestingboard.com');

    //Klik Shopping Cart saat tidak login
    cy.get('[class="action showcart"]').click();

  })
  
})