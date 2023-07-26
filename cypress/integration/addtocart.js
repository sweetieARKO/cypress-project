
describe("Add to cart", ()=>{
    it("test add to cart", ()=>{    
        cy.viewport(1111, 755);
        cy.visit("https://ghmade.com/market")
        cy.get(":nth-child(1) > #product-card > #cart-button > .fe").click().should('exist')
        cy.get(":nth-child(3) > #product-card > #cart-button").click().should('exist')
        cy.get(":nth-child(2) > #product-card > #cart-button").click().should('exist')
        cy.get(":nth-child(5) > #product-card > #cart-button").click().should('exist')
        cy.get(".dropdown > .nav-link").click()
        cy.get(".viewemptycart").click()
        cy.wait(5000)
    })
    it("delete from cart",()=>{
        
        cy.viewport(1111, 755);
        cy.visit("https://ghmade.com/market")
        cy.get(":nth-child(1) > #product-card > #cart-button > .fe").click().should('exist')
        cy.get(":nth-child(3) > #product-card > #cart-button").click().should('exist')
        cy.get(":nth-child(2) > #product-card > #cart-button").click().should('exist')
        cy.get(":nth-child(5) > #product-card > #cart-button").click().should('exist')
        cy.get(".dropdown > .nav-link").click()
        cy.get(".viewemptycart").click()
        cy.get(":nth-child(3) > :nth-child(1) > .col-md-7 > .row > .col-2").click()        
         cy.wait(5000) 
    })
    it("Increase the quantity of the item",()=>{
        cy.viewport(1111, 755);
        cy.visit("https://ghmade.com/market")
        cy.get(":nth-child(1) > #product-card > #product-card-body > .justify-content-between > .mb-1 > #quantity").type(2).should('exist')
        cy.get(":nth-child(1) > #product-card > #cart-button").click()
        cy.get(":nth-child(2) > #product-card > #product-card-body > .justify-content-between > .mb-1 > #quantity").type(2).should('exist')
        cy.get(':nth-child(2) > #product-card > #cart-button > .fe').click().should('exist')
        cy.get('.dropdown > .nav-link').click()
        cy.get('.viewemptycart').click()
        cy.wait(5000) 
    })  
    
    it("Selecting 0 as a quantity",()=>{
        cy.viewport(1111, 755);
        cy.visit("https://ghmade.com/market")
        cy.get(':nth-child(1) > #product-card > #product-card-body > .justify-content-between > .mb-1 > #quantity').clear()
        cy.get(':nth-child(1) > #product-card > #product-card-body > .justify-content-between > .mb-1 > #quantity').type(0)
        cy.wait(15000)
    })
    
    it("view information about item", ()=>{
        cy.viewport(1111, 755);
        cy.visit("https://ghmade.com/market")
    
        cy.get(':nth-child(1) > #product-card > [style="width: 100%; overflow: hidden; border-radius: 10px 10px 0px 0px; height: 100%;"] > #product-image').click()
        expect(true).to.be.true    
        
    })
    
    })