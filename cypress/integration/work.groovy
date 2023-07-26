it("sign-up with valid email and valid password",()=>{
    cy.viewport(1111,755);
    cy.visit("https://ghmade.com/market")
    cy.get('[href="/auth/signup"]').click()
    cy.get('#InputEmail').type('arkoemilia563@gmail.com').should("have.value", 'arkoemilia563@gmail.com')
    cy.get('#InputPassword1').type('Abigail123&ARKO').invoke('attr', 'type').should('equal', 'password');
    cy.get('#InputPassword2').type('Abigail123&ARKO').invoke('attr', 'type').should('equal', 'password');
    cy.get('#individual').click().should('be.checked')
    cy.get('#signup_button').click().should('contain', 'Sign Up')
    cy.wait(5000)
    })
    
    it("test sign-up",()=>{
        cy.viewport(1111,755);
        cy.visit("https://ghmade.com/market")
        cy.get('[href="/auth/signup"]').click()
        cy.get('#InputEmail').type('estherarko3@gmail.com').should("have.value", 'estherarko3@gmail.com')
        cy.get('#InputPassword1').type('Abigail123&ARKO').invoke('attr','type').should('equal', 'password')
        cy.get('#InputPassword2').type('Abigail123&ARKO').invoke('attr', 'type').should('equal', 'password')
        cy.get('#individual').click().should('be.checked')
        cy.get('#signup_button').click().should('contain', 'Sign Up')
        cy.wait(5000)
    })
    
    
    it("sign-up with invalid email and valid password",()=>{
        cy.viewport(1111,755);
        cy.visit("https://ghmade.com/market")
        cy.get('[href="/auth/signup"]').click()
        cy.get('#InputEmail').type('anrfedcde').should("have.value", 'anrfedcde')
        cy.get('#InputPassword1').type('Abigail123&ARKO').invoke('attr','type').should('equal', 'password')
        cy.get('#InputPassword2').type('Abigail123&ARKO').invoke('attr','type').should('equal', 'password')
        cy.get('#individual').click().should('be.checked')
        cy.get('#signup_button').click().should('contain', 'Sign Up')
        cy.wait(5000)
    })
    
    it("sign-up with valid email and invalid password",()=>{
        cy.viewport(1111,755);
        cy.visit("https://ghmade.com/market")
        cy.get('[href="/auth/signup"]').click()
        cy.get('#InputEmail').type('arkosweetie@gmail.com').should("have.value",'arkosweetie@gmail.com' )
        cy.get('#InputPassword1').type('AbigailARKO').invoke('attr','type').should('equal', 'password')
        cy.get('#InputPassword2').type('AbigailARKO').invoke('attr', 'type').should('equal', 'password')
        cy.get('#individual').click().should('be.checked')
        cy.get('#signup_button').click().should('contain', 'Sign Up')
        cy.wait(5000)
    })
    
    it("sign-up with valid email and mismatch password",()=>{
        cy.viewport(1111,755);
        cy.visit("https://ghmade.com/market")
        cy.get('[href="/auth/signup"]').click()
        cy.get('#InputEmail').type('arkosweetie@gmail.com').should("have.value",'arkosweetie@gmail.com')
        cy.get('#InputPassword1').type('AbigailARKO').invoke('attr','type').should('equal', 'password')
        cy.get('#InputPassword2').type('Abigail123&ARKO').invoke('attr','type').should('equal', 'password')
        cy.get('#individual').click().should('be.checked')
        cy.get('#signup_button').click().should('contain', 'Sign Up')
        cy.wait(5000)
    })
    
    
    it("sign-up without choosing an organization",()=>{
        cy.viewport(1111,755);
        cy.visit("https://ghmade.com/market")
        cy.get('[href="/auth/signup"]').click()
        cy.get('#InputEmail').type('arkosweetie@gmail.com').should("have.value",'arkosweetie@gmail.com')
        cy.get('#InputPassword1').type('Abigail123&ARKO').invoke('attr','type').should('equal', 'password')
        cy.get('#InputPassword2').type('Abigail123&ARKO').invoke('attr', 'type').should('equal', 'password')
        cy.get('#signup_button').click().should('contain', 'Sign Up')
    })
    