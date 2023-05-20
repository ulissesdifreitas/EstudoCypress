
describe('Teste Form QA Demo', () => {

  beforeEach('passes', () => {
    cy.visit('https://demoqa.com/')
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

  it.only('Validando Menu Lateral', () => {

    cy.contains('.card-body', 'Elements').should('be.visible').click()
    cy.get(':nth-child(1) > .group-header > .header-wrapper').should('be.visible').click()
    
    cy.wait(3000)

    cy.get('div.element-group:nth-child(1) > span:nth-child(1)')
    .contains('Elements').should('be.visible')
    cy.get('div.element-group:nth-child(2) > span:nth-child(1)')
    .contains('Forms').should('be.visible')
    cy.get('div.element-group:nth-child(3) > span:nth-child(1)')
    .contains('Alerts, Frame & Windows').should('be.visible')
    cy.get('div.element-group:nth-child(4) > span:nth-child(1)')
    .contains('Widgets').should('be.visible')
    cy.get('div.element-group:nth-child(5) > span:nth-child(1)')
    .contains('Interactions').should('be.visible')
    cy.get('div.element-group:nth-child(6) > span:nth-child(1)')
    .contains('Book Store Application').should('be.visible')

  })

})