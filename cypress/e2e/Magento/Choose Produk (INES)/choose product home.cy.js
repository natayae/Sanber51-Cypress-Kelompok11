const { select } = require("async");

describe('template spec', () => {
  it('passes', () => {
    //visit ke web utama
    cy.visit('https://magento.softwaretestingboard.com');

    //scroll ke bawah
    cy.scrollTo(0, 500);

    //pilih item dengan nama produk "Argus All-Weather Tank"
    cy.get('[title="Argus All-Weather Tank"]').click();

    //pilih size "S"
    cy.get('#option-label-size-143-item-167').click();

    //Pilih color "grey"
    cy.get('#option-label-color-93-item-52').click();

    //hapus textbox qty
    cy.get('#qty').clear();

    //input qty=0
    cy.get('#qty').type('0');
    
    //klik button Add to cart
    cy.get('button[title="Add to Cart"]').click();
  })
  
})