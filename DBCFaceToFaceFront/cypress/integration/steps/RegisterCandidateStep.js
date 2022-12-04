/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import RegisterCandidatePage from "../pages/ResgisterCandidatePage"
const registerCandidatePage = new RegisterCandidatePage;

import Metodos from "../utils/Metodos"

const metodos = new Metodos;
let email = "pietro.bianchi@dbccompany.com.br"

beforeEach(() => {
    loginPage.loginNoSistema();
})

context('Registrar Candidato', () => {
    it('Validar criar candidato com sucesso', () => {
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoCorretamente();
        metodos.Login().then((login) => {
            metodos.GETcandidatoEmailRequest(email, login.body).then((candidato) => {
                metodos.DELETEfisicoCurriculoRequest(candidato.body.idCandidato, login.body)
                metodos.DELETEfisicoCandidatoRequest(candidato.body.idCandidato, login.body)
            })
        })
    });

    it('Validar criar candidato preenchendo campos obrigatórios', () => {
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoCamposObrigatorios();
        metodos.Login().then((login) => {
            metodos.GETcandidatoEmailRequest(email, login.body).then((candidato) => {
                metodos.DELETEfisicoCurriculoRequest(candidato.body.idCandidato, login.body)
                metodos.DELETEfisicoCandidatoRequest(candidato.body.idCandidato, login.body)
            })
        })
    });

    it('Validar criar candidato sem preencher campos', () => {
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoSemPreencherCampos();
    });

    it('Validar criar candidato preenchendo campos nao obrigatórios', () => {
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoCamposNaoObrigatorios();
    });
})