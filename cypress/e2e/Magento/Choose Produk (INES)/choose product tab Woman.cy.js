const { select } = require("async");

describe('template spec', () => {
  it('passes', () => {
    //visit ke web utama
    cy.visit('https://magento.softwaretestingboard.com');

    //pilih buttongrup "Woman"
    cy.get('#ui-id-4').click();

    //Pilih produk yg nama produk "Radiant Tee"
    cy.get('[title="Radiant Tee"]').click();

    //pilih size "XS"
    cy.get('#option-label-size-143-item-166').click();

    //Pilih color "blue"
    cy.get('#option-label-color-93-item-50').click();

    //hapus textbox qty
    cy.get('#qty').clear();


  //input qty=2
    cy.get('#qty').type('2');

//klik button Add to cart
    cy.get('button[title="Add to Cart"]').click();


  })
  
})