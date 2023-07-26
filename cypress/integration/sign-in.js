it("test sign-in",()=>{
    cy.viewport(1111, 755);
    cy.visit("https://ghmade.com/market")
    cy.get("#landingpage_login_btn").click()
    cy.get("#InputEmail").type('arkoemilia563@gmail.com').should("have.value", 'arkoemilia563@gmail.com')
    cy.get('#InputPassword1').type('Abigail123&ARKO').invoke('attr', 'type').should('equal', 'password');

    cy.get('#signin_button').should('contain', 'Login').should('be.visible').click()
    cy.wait(4000)
    })
    it("test sign-in",()=>{
        cy.viewport(1111, 755);
        cy.visit("https://ghmade.com/market")
        cy.get("#landingpage_login_btn").click()
        cy.get("#InputEmail").type('arkoemilia563@gmail.com').should("have.value", 'arkoemilia563@gmail.com')
        cy.get('#InputPassword1').type('Abigail123&ARKO').invoke('attr', 'type').should('equal', 'password');

        cy.get('#signin_button').should('contain', 'Login').should('be.visible').click()
        cy.wait(4000)
        })
        it("test sign-in",()=>{
            cy.viewport(1111, 755);
            cy.visit("https://ghmade.com/market")
            cy.get("#landingpage_login_btn").click()
            cy.get("#InputEmail").type('arkoemilia563@gmail.com').should("have.value", 'arkoemilia563@gmail.com')
            cy.get('#InputPassword1').type('Abil123&ARKO').invoke('attr', 'type').should('equal', 'password');
            cy.get('#signin_button').should('contain','Login')
            .should('be.visible').click()
            
            cy.wait(4000)
            })
            it("test sign-in",()=>{
                cy.viewport(1111, 755);
                cy.visit("https://ghmade.com/market")
                cy.get("#landingpage_login_btn").click()
                cy.get("#InputEmail").type('arkoemilia563@gmail.com').should("have.value", 'arkoemilia563@gmail.com')
                cy.get('#InputPassword1').type('AbigaiARKO').invoke('attr', 'type').should('equal', 'password');
                cy.get('#signin_button').should('contain','Login').should('be.visible').click()
                cy.wait(4000)
                })
                 
    