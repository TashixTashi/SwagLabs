describe('Cart', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Check if after logging in your directed to the product page', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.inventory_item_name').should('be.visible')
        cy.get('.title').contains('Products')
        cy.url().should('contain', 'inventory')
    })

    it("should be able to sort products by price low to high and vice versa", () => {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.get(".product_sort_container").select("lohi");
      cy.get(".inventory_item_price")

      cy.wait(3000);
       
      cy.get(".product_sort_container").select("hilo");
      cy.get(".inventory_item_price")
         
    })

    it("should be able to sort products by price low to high and vice versa", () => {
      cy.get('#user-name').type('standard_user')
      cy.get('#password').type('secret_sauce')
      cy.get('#login-button').click()
      cy.get(".product_sort_container").select("za");
      cy.get(".inventory_item_price")

      cy.wait(3000);
       
      cy.get(".product_sort_container").select("az");
      cy.get(".inventory_item_price")
         
    })

})