import BasePage from "./BasePage";
const basePage = new BasePage();

let email = "#input-email-register-interview"
let data = "#input-dateInterview-register-interview"
let hora = "#input-scheduleInterview-register-interview"
let obs = "#input-observation-register-interview"
let enviarBtn = "#button-submit-register-interview"
let buscarBnt = "#form-register-interview > div:nth-child(1) > div:nth-child(1) > div > div > div > button"
let msgNome = "#error-candidate-register-interview"
let msgEmail = "#error-email-register-interview"
let msgCidade = "#error-city-register-interview"
let msgEstado = "#error-state-register-interview"
let msgDate = "#error-dateInterview-register-interview"
let msgHora = "#error-scheduleInterview-register-interview"
let msgObs = "#error-observation-register-interview"
let nomeCandidato = "Marta Golpista"
let emailCandidato = "pietro.bianchi@dbccompany.com.br"
let cidadeCandidato = "Belo Horizonte"
let estadoCandidato = "MG"

let tostify = ".Toastify__toast-body > :nth-child(2)"

export default class RegisterInterviewPage extends BasePage {
    criarEntrevistaCorretamente(){
        basePage.preencherInput(email, emailCandidato)
        basePage.click(buscarBnt)
        cy.get(data).type("2022-12-31")
        cy.get(hora).type("14:00")
        basePage.preencherInput(obs, nomeCandidato)
        basePage.tempo(100)
        basePage.click(enviarBtn)
        basePage.validarText(tostify, "Entrevista cadastrada com sucesso!")
    }

    criarEntrevistaSemPreencherCampos(){
        basePage.click(enviarBtn)
        basePage.validarText(msgNome, "Campo obrigatório!")
        basePage.validarText(msgEmail, "Campo obrigatório!")
        basePage.validarText(msgCidade, "Campo obrigatório!")
        basePage.validarText(msgEstado, "Campo obrigatório!")
        basePage.validarText(msgDate, "Campo obrigatório!")
        basePage.validarText(msgHora, "Campo obrigatório!")
        basePage.validarText(msgObs, "Observação é obrigatório!")
    }

    criarEntrevistaTeste(){
        cy.get(data).type("2022-12-31")
        cy.get(hora).type("14:00")
        basePage.preencherInput(obs, nomeCandidato)
        basePage.tempo(100)
        basePage.click(enviarBtn)
        basePage.tempo(1000)
        basePage.validarText(tostify, "Entrevista cadastrada com sucesso!")
    }

    criarEntrevistaCandidatoJaAgendado(){
        basePage.preencherInput(email, emailCandidato)
        basePage.click(buscarBnt)
        cy.get(data).type("2022-12-07")
        cy.get(hora).type("14:00")
        basePage.preencherInput(obs, nomeCandidato)
        basePage.tempo(100)
        basePage.click(enviarBtn)
        basePage.tempo(1000)
        basePage.validarText(tostify, "Entrevista para o Candidato já agendada!")
    }
}