describe ('Footer - links',() => {
    beforeEach(() => {
        cy.visit('/')
    })

it('check twitter', () => 
{
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[class="social_twitter"]').click()


})

it('check facebook', () => 
{
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[class="social_facebook"]').click()


})

it('check linkedin', () => 
{
    cy.get('#user-name').type('problem_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.get('[class="social_linkedin"]').click()


})

})