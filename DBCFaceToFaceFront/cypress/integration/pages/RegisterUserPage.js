import BasePage from "./BasePage";
const basePage = new BasePage();

import { faker } from '@faker-js/faker';

let nome = "#name-register-user"
let email = "#email-register-user"
let cidade = "#cidade-register-user"
let estado = "#estado-register-user"
let genero = "#genero-masculino-register-user"
let tipoGestao = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-69vuws > form > div.MuiBox-root.css-1tjw18l > div:nth-child(2) > div:nth-child(3) > div > div > div > label:nth-child(1)"
let tipoInstrutor = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-69vuws > form > div.MuiBox-root.css-1tjw18l > div:nth-child(2) > div:nth-child(3) > div > div > div > label:nth-child(2)"
let tipoAdmin = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-69vuws > form > div.MuiBox-root.css-1tjw18l > div:nth-child(2) > div:nth-child(3) > div > div > div > label:nth-child(3)"
let enviarBtn = "#button-submit-register-user"
let Foto = "#root > div > div.MuiBox-root.css-v3si1q > div.MuiBox-root.css-69vuws > form > div.MuiBox-root.css-1qjhpkf > button"
let msgNome = "#error-name-register-user"
let msgEmail = "#error-email-register-user"
let msgCidade = "#error-cidade-register-user"
let msgEstado = "#error-state-register-user"
let msgGenero = "#error-genero-register-user"
let msgTipo = "#error-type-register-user"
let nomeUser = "Marta Golpista"
let emailUser = "pietro.bianchi@dbccompany.com.br"
let cidadeUser = "Belo Horizonte"
let estadoUser = "MG"

let tostify = ".Toastify__toast-body > :nth-child(2)"


export default class RegisterUserPage extends BasePage {
    criarCandidatoCorretamente(){
        basePage.preencherInput(nome, nomeUser)
        basePage.preencherInput(email, emailUser)
        basePage.preencherInput(cidade, cidadeUser)
        basePage.preencherInput(estado, estadoUser)
        basePage.click(genero)
        basePage.click(tipoInstrutor)
        basePage.click(enviarBtn)
        basePage.validarText(tostify, "Usuário cadastrado com sucesso!")
    }

    criarCandidatoSemPreencherCampos(){
        basePage.click(enviarBtn)
        basePage.validarText(msgNome, "Nome completo é obrigatório!")
        basePage.validarText(msgEmail, "Email é obrigatório!")
        basePage.validarText(msgCidade, "Cidade é obrigatório!")
        basePage.validarText(msgEstado, "Estado é obrigatório!")
        basePage.validarText(msgGenero, "Gênero é obrigatório!")
        basePage.validarText(msgTipo, "Campo obrigatório!")
    }
}