
describe('Teste Form QA Demo', () => {

    beforeEach('passes', () => {
      cy.visit('https://demoqa.com/')
      cy.wait(5000)
    })
  
    it('Validando Menus Página Inicial', () => {
  
      cy.get('img[src="/images/Toolsqa.jpg"]').should('be.visible')
  
      cy.contains('.card-body', 'Elements').should('be.visible')
      cy.contains('.card-body', 'Forms').should('be.visible')
      cy.contains('.card-body', 'Alerts, Frame & Windows').should('be.visible')
      cy.contains('.card-body', 'Widgets').should('be.visible')
      cy.contains('.card-body', 'Interactions').should('be.visible')
      cy.contains('.card-body', 'Book Store Application').should('be.visible')
      
    })

    it.only('Acessando Menu Elements', () => {

    cy.contains('.card-body', 'Elements').should('be.visible')
    cy.wait(5000)
    cy.contains('.card-body', 'Elements').should('be.visible').click()

    cy.get('div.element-group:nth-child(1) > span:nth-child(1)')
    .contains('Elements').should('be.visible')

    cy.get('#item-0').contains('.text', 'Text Box').should('be.visible')
    cy.get('#item-1').contains('.text', 'Check Box').should('be.visible')
    cy.get('#item-2').contains('.text', 'Radio Button').should('be.visible')
    cy.get('#item-3').contains('.text', 'Web Tables').should('be.visible')
    cy.get('#item-4').contains('.text', 'Buttons').should('be.visible')
    cy.get('#item-5').contains('.text', 'Links').should('be.visible')
    cy.get('#item-6').contains('.text', 'Broken Links - Images').should('be.visible')
    cy.get('#item-7').contains('.text', 'Upload and Download').should('be.visible')
    cy.get('#item-8').contains('.text', 'Dynamic Properties').should('be.visible')

    })
})