/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import RegisterCandidatePage from "../pages/ResgisterCandidatePage"
const registerCandidatePage = new RegisterCandidatePage;

import RegisterInterviewPage from "../pages/RegisterInterviewPage"
const registerInterviewPage = new RegisterInterviewPage;

import ChangePasswordPage from "../pages/ChancePasswordPage"
const changePasswordPage = new ChangePasswordPage;

import SchedulePage from "../pages/SchedulePage"
const schedulePage = new SchedulePage;

import Metodos from "../utils/Metodos"
const metodos = new Metodos;

const nome = 'Marta Golpista'
let email = "pietro.bianchi@dbccompany.com.br"


beforeEach(() => {
    loginPage.loginNoSistema();
})


context('fluxo teste', () => {
    it.only('cadastro de candidato e marcaçao de entrevista', () => {
        dashboardPage.validarNomeUser('Ályson');
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoCorretamente();
        dashboardPage.buscaCandidatoPorNome(nome);
        dashboardPage.marcarEntrevistaCandidato();
        registerInterviewPage.criarEntrevistaTeste();
        dashboardPage.schedulePage();
        schedulePage.validarElemento();
        schedulePage.clicarEntrevista();
        schedulePage.cancelarEntrevista();
        dashboardPage.schedulePage();
        schedulePage.validarElementoInexistente();

        metodos.Login().then((login) => {
            metodos.GETcandidatoEmailRequest(email, login.body).then((candidato) => {
                metodos.DELETEfisicoCurriculoRequest(candidato.body.idCandidato, login.body)
                metodos.DELETEfisicoCandidatoRequest(candidato.body.idCandidato, login.body)
            })
        })
    });
})