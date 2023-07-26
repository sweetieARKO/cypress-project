describe('template spec',() =>{
    beforeEach(()=>{
        cy.visit("https://ghmade.com/market")
        cy.get('[href="/auth/signup"]').click()
    })
    it('sign-up with a valid email and a valid password',()=>{
        const randomEmail = Math.random().toString(36).substring(2,15)+"@gmail.com"


        cy.get('#InputEmail').type(randomEmail)
        
        cy.get('#InputPassword1').type('Abigail123&ARKO').invoke('attr','type').should('equal', 'password')
        cy.get('#InputPassword2').type('Abigail123&ARKO').invoke('attr','type').should('equal', 'password')
        cy.get('#individual').click().should('be.checked')
        cy.get('#signup_button').click().should('contain', 'Sign Up')
        cy.wait(5000)


        cy.wait(5000)


    })
})