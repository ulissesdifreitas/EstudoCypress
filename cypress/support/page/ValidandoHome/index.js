const elementosHome = require ('../../page/ValidandoHome/elements').ELEMENTS;

class Home{

    acessandoHome(){
        cy.clearAllLocalStorage()
        cy.clearCookies()
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')
        cy.wait(3000)
    }

    validandoLabelTop(){
        cy.get(elementosHome.label_top_xyzbank).should('have.text','XYZ Bank')
    }

    validandoBtnHome(){
        cy.get(elementosHome.btn_home).should('be.visible')
    }

    validandoBtnCustomerLogin(){
        cy.get(elementosHome.btn_customer_login)
        .should('have.text', 'Customer Login').should('be.visible')
    }

    validandoBtnManagerLogin(){
        cy.get(elementosHome.btn_bank_manager_login)
        .should('have.text', 'Bank Manager Login').should('be.visible')
    }

}

export default new Home();