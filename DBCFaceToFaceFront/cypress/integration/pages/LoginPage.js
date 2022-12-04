import BasePage from "./BasePage";
const basePage = new BasePage();

let username = "#input-user-sign-in"
let password = "#input-password-sign-in"
let visualizePasswordBtn = "#field2-input-password-sign-in > div > div > div > button"
let loginBtn = "#button-sign-in"
let recoverPassword = "#link-to-recover-password-sign-in"
let msgmUser = "#errors-user-sign-in"
let msgmPassword = "#errors-password-sign-in"
let tostify = ".Toastify__toast-body > :nth-child(2)"
let userPrincipal = 'julio.gabriel@dbccompany.com.br'
let userPassword = '123'
let incorrectPassword = '00000000'
let urlRecoveryPassword = '/recover-password'

export default class LoginPage extends BasePage {

    loginNoSistema(){
        basePage.preencherInput(username, userPrincipal)
        basePage.preencherInput(password, userPassword)
        basePage.click(loginBtn)
        basePage.tempo(3000)
    }

    loginNoSistemaComSenhaErrada(){
        basePage.preencherInput(username, userPrincipal)
        basePage.preencherInput(password, incorrectPassword)
        basePage.click(loginBtn)
        basePage.validarText(tostify, "Senha ou email incorretos!")
    }

    loginNoSistemaSemPreencherCampos(){
        basePage.click(loginBtn)
        basePage.validarText(msgmUser, "E-mail é obrigatório!")
        basePage.validarText(msgmPassword, "Senha é obrigatório!")
    }

    loginNoSistemaSemPreencherCampoSenha(){
        basePage.preencherInput(username, userPrincipal)
        basePage.click(loginBtn)
        basePage.validarText(msgmPassword, "Senha é obrigatório!")
    }

    loginNoSistemaSemPreencherCampoUser(){
        basePage.preencherInput(password, incorrectPassword)
        basePage.click(loginBtn)
        basePage.validarText(msgmUser, "E-mail é obrigatório!")
    }

    recoveryPassword(){
        basePage.click(recoverPassword)
        basePage.validateRedirecionarPagina(urlRecoveryPassword)
    }
}