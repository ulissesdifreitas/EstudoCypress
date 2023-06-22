const elementosAddCliente = require ('../../page/CriandoCliente/elements').ELEMENTS;
const elementosHome = require ('../../page/ValidandoHome/elements').ELEMENTS;

class AddCliente{

    //CLICAR
    clicandoBtnManagerLogin(){
        cy.get(elementosHome.btn_bank_manager_login)
        .should('have.text', 'Bank Manager Login').should('be.visible')
        .click()
    }

    clicandoTabAddCustomer(){
        cy.get(elementosAddCliente.btn_tab_add_customer).click()
    }

    clicandoBtnAddCustomer(){
        cy.get(elementosAddCliente.btn_add_customer).click()
    }

    clicandoTabCustomers(){
        cy.get(elementosAddCliente.btn_tab_list_customers).click()
    }

    //PREENCHER
    preencherCampoFirstName(){
        cy.get(elementosAddCliente.text_field_first_name).type('Cliente')
    }

    preencherCampoLastName(){
        cy.get(elementosAddCliente.text_field_last_name).type('Teste')
    }

    preencherCampoPostCode(){
        cy.get(elementosAddCliente.text_field_post_code).type(Math.floor(Math.random() * (999 - 100) + 100))
    }

    //VALIDAR
    validandoTabAddCustomer(){
        cy.get(elementosAddCliente.btn_tab_add_customer)
        .should('have.text', 'Add Customer\n\t\t').should('be.visible')
    }

    validandoTabOpenAccount(){
        cy.get(elementosAddCliente.btn_tab_open_account)
        .should('have.text', 'Open Account\n\t\t').should('be.visible')
    }

    validandoTabCustomers(){
        cy.get(elementosAddCliente.btn_tab_list_customers)
        .should('have.text', 'Customers\n\t\t').should('be.visible')
    }

    validandoCampoFirstName(){
        cy.get(elementosAddCliente.text_field_first_name).should('be.visible')
    }

    validandoCampoLastName(){
        cy.get(elementosAddCliente.text_field_last_name).should('be.visible')
    }

    validandoCampoPostCode(){
        cy.get(elementosAddCliente.text_field_post_code).should('be.visible')
    }

    validandoAlertAddCustomer(){
        const stub = cy.stub()
        cy.on('window:alert', stub)
    }

    validandoClienteAdd(){
        cy.contains('Cliente').should('be.visible')
    }

}

export default new AddCliente();