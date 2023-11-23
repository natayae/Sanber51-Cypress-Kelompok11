describe('template spec', () => {
  it('passes', () => {
    //visit ke web utama
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get("#ui-id-4").click();
    //pilih buttongroup 'Women',pilih dropdown 'Tops' --> 'Jackets'
    //cy.visit('https://magento.softwaretestingboard.com/women/tops-women/jackets-women.html')
    
    //klik salah satu item produk
    //cy.visit('https://magento.softwaretestingboard.com/olivia-1-4-zip-light-jacket.html')
    
    //pilih size,color, qty, kemudian klik button 'add to cart'
    //cy.get('button[title="Add To Card"]').click();
  })
  
})