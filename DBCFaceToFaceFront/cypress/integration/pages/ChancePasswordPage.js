import BasePage from "./BasePage";
const basePage = new BasePage();

let msgSenhaAtual = ".MuiBox-root > :nth-child(4)"
let msgSenhaNova = ".MuiBox-root > :nth-child(6)"
let confirmBtn = '#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-mu8cmu > div > button'
let urlChangePassword = 'http://vemser-dbc.dbccompany.com.br:39000/yuriatzler/facetoface-front/change-password'
let changePasswordBtn = '#button-submit-editar-usuario'
let tostify = ".Toastify__toast-body > :nth-child(2)"



export default class ChangePasswordPage extends BasePage {
    changePasswordPage(){
        basePage.click(changePasswordBtn)
    }

    trocarSenhaSemPreencherCampos(){
        basePage.click(confirmBtn)
        basePage.validarText(msgSenhaAtual, "Senha antiga é obrigatória")
        basePage.validarText(msgSenhaNova, "Campo obrigatório")
    }
}