describe ('Login Tests',() => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Login with invalid user credentials', () => 
    {
        cy.get('#user-name').type('standard.uuser')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.wait(3000); 

    })

    it('Login with valid user credentials', () => 
    {
        cy.get('#user-name').type('problem_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('include', '/inventory.html') 
    })

})
