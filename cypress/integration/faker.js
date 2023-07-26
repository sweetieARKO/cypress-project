import {faker } from "@faker-js/faker"

describe('My web app', ()=>{
    const firstName =faker.name.firstName()
    const lastName = faker.name.lastName()
    const email = faker.internet.email()
    const password = faker.internet.password()
    it('Add person', function(){
        /*cy.login("test@test.com","123456");*/
        cy.visit('https://yourweb.app');
        cy.get('.mt-2 > .font-medium').click()
        cy.get('#pf-lesson-signup-0').type(firstName);
        cy.get('#pf-lesson-signup-1').type(lastName);
        cy.get('#pf-lesson-signup-2').type(email);
        cy.get('#pf-lesson-signup-3').type(password);
        cy.get('#pf-lesson-signup-4').click()

    })
})