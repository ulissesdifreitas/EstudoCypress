/// <reference types='cypress'/>

import Home from '../support/page/ValidandoHome'
import AddCliente from '../support/page/CriandoCliente'

describe('Validando criação de cliente', () => {

    before('Validando elementos da Home', () => {

        Home.acessandoHome();
        Home.validandoLabelTop();
        Home.validandoBtnHome();
        Home.validandoBtnCustomerLogin();
        Home.validandoBtnManagerLogin();

    })

    it('Criando novo cliente do XYZ Bank', () => {
        
        AddCliente.clicandoBtnManagerLogin();
        AddCliente.validandoTabAddCustomer();
        AddCliente.validandoTabOpenAccount();
        AddCliente.validandoTabCustomers();
        AddCliente.clicandoTabAddCustomer();
        AddCliente.validandoCampoFirstName();
        AddCliente.validandoCampoLastName();
        AddCliente.validandoCampoPostCode();
        AddCliente.preencherCampoFirstName();
        AddCliente.preencherCampoLastName();
        AddCliente.preencherCampoPostCode();
        AddCliente.clicandoBtnAddCustomer();
        AddCliente.validandoAlertAddCustomer();
        AddCliente.clicandoTabCustomers();
        AddCliente.validandoClienteAdd();


    })




})