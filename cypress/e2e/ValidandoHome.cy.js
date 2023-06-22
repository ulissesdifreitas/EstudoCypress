/// <reference types='cypress'/>

import Home from '../support/page/ValidandoHome'

describe('Acessando e Validando home Banco XYZ', () => {

    beforeEach('Acessando XYZ Bank',() => {
        Home.acessandoHome()

    })

    it('Validando componentes home', () => {
        Home.validandoLabelTop()
        Home.validandoBtnHome()
        Home.validandoBtnCustomerLogin()
        Home.validandoBtnManagerLogin()

    })


})