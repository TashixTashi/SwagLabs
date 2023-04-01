describe('Cart', () => {
    beforeEach(() => {
        cy.visit('/')
      })

    it('Add a single product to cart', () => {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.wait(3000); 


        cy.get('.shopping_cart_badge').should('have.text', 1)
        cy.get('.shopping_cart_link').click()

        cy.get('.cart_quantity').should('have.text', 1)
        cy.get('#remove-sauce-labs-backpack').should('be.visible')
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    })

    it('Remove one item from cart', () => {
        
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        
        cy.get('.shopping_cart_link').click()

        cy.get('.cart_quantity').should('have.text', 1)
        cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
        cy.get('#remove-sauce-labs-backpack').click()

        cy.get('.inventory_item_name').should('not.exist')
        cy.get('.removed_cart_item').should('exist')
    })
})