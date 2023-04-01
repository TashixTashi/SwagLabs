describe ('Logout',() => {
    beforeEach(() => {
        cy.visit('/')
        
    })

it('Logout', () => 
{
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.url().should('eq', 'https://www.saucedemo.com/')
})

})