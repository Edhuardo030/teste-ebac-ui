/// <reference types="cypress"/>

describe('Funcionalidade: login', () => {
    
    it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('francisco10159@gmail.com')
    cy.get('#password').type('N@s210601')
    cy.get('#rememberme').click()
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, francisco10159 (não é francisco10159? Sair)')   
    })
})
