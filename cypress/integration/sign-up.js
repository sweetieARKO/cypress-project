import {faker } from "@faker-js/faker";
describe('sign-up to GHmade',()=>{

    const validEmail = faker.internet.email()
    
    const password = faker.internet.password();
    const invalidEmail = validEmail.replace('@','');  
    const invalidPassword= password+ '1';
    const missmatch = ('abigai1234s')
    it('sign-up to GHmade with valid email and a valid password' , function(){
        
        cy.visit("https://ghmade.com/market")
        cy.get('[href="/auth/signup"]').click()
        cy.get('#InputEmail').type(validEmail)
        cy.get('#InputPassword1').type(password)
        cy.get('#InputPassword2').type(password)
        cy.get('#organization').click()
        cy.get('#signup_button').click()
    cy.wait(5000)
    })

it('sign-up with an invalid Email and a valid password', function(){
cy.visit("https://ghmade.com/market")
cy.get('[href="/auth/signup"]').click()
cy.get('#InputEmail').type(invalidEmail)
cy.get('#InputPassword1').type(password)
cy.get('#InputPassword2').type(password)
cy.get('#individual').click()
cy.get('#signup_button').click()
cy.wait(5000)
})

it('sign-up with a valid Email and a invalid password a the a valid confirm password is valid', function(){
    cy.visit("https://ghmade.com/market")
    cy.get('[href="/auth/signup"]').click()
    cy.get('#InputEmail').type(validEmail)
    cy.get('#InputPassword1').type(invalidPassword)
    cy.get('#InputPassword2').type(password)
    cy.get('#individual').click()
    cy.get('#signup_button').click()
    cy.wait(5000)
})
it('sign-up with a valid Email, a valid password and an invalid password', function(){
    cy.visit("https://ghmade.com/market")
    cy.get('[href="/auth/signup"]').click()
    cy.get('#InputEmail').type(validEmail)
    cy.get('#InputPassword1').type(password)
    cy.get('#InputPassword2').type(invalidPassword)
    cy.get('#individual').click()
    cy.get('#signup_button').click()
    cy.wait(5000)
})
it('sign-up to GHmade without selecting an organization' , function(){
        
    cy.visit("https://ghmade.com/market")
    cy.get('[href="/auth/signup"]').click()
    cy.get('#InputEmail').type(validEmail)
    cy.get('#InputPassword1').type(password)
    cy.get('#InputPassword2').type(password)
    cy.get('#signup_button').click()
cy.wait(5000)
})
})
