/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import RegisterInterviewPage from "../pages/RegisterInterviewPage"
const registerInterviewPage = new RegisterInterviewPage;

import RegisterCandidatePage from "../pages/ResgisterCandidatePage"
const registerCandidatePage = new RegisterCandidatePage;

import Metodos from "../utils/Metodos"
const metodos = new Metodos;
let email = "pietro.bianchi@dbccompany.com.br"

beforeEach(() => {
    loginPage.loginNoSistema();
})

context('Registrar Entrevista', () => {
    it('Validar criar entrevista com sucesso', () => {
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoCorretamente();
        dashboardPage.registerInterviewPage();
        registerInterviewPage.criarEntrevistaCorretamente();
        metodos.Login().then((login) => {
            metodos.GETcandidatoEmailRequest(email, login.body).then((candidato) => {
                metodos.DELETEfisicoEntrevistaRequest(email, login.body)
                metodos.DELETEfisicoCurriculoRequest(candidato.body.idCandidato, login.body)
                metodos.DELETEfisicoCandidatoRequest(candidato.body.idCandidato, login.body)
            })
        })
    });

    it('Validar criar entrevista sem preencher campos', () => {
        dashboardPage.registerInterviewPage();
        registerInterviewPage.criarEntrevistaSemPreencherCampos();
    });

    it('Validar criar entrevista para um candidato com entrevista ja marcada', () => {
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoCorretamente();
        dashboardPage.registerInterviewPage();
        registerInterviewPage.criarEntrevistaCorretamente();
        dashboardPage.registerInterviewPage();
        registerInterviewPage.criarEntrevistaCandidatoJaAgendado();
        metodos.Login().then((login) => {
            metodos.GETcandidatoEmailRequest(email, login.body).then((candidato) => {
                metodos.DELETEfisicoEntrevistaRequest(email, login.body)
                metodos.DELETEfisicoCurriculoRequest(candidato.body.idCandidato, login.body)
                metodos.DELETEfisicoCandidatoRequest(candidato.body.idCandidato, login.body)
            })
        })
    });

    it('Validar criar entrevista para um candidato com entrevista ja marcada', () => {
        dashboardPage.registerCandidatePage();
        registerCandidatePage.criarCandidatoCorretamente();
        dashboardPage.registerInterviewPage();
        registerInterviewPage.criarEntrevistaCorretamente();
        dashboardPage.registerInterviewPage();
        registerInterviewPage.criarEntrevistaCandidatoJaAgendado();
        metodos.Login().then((login) => {
            metodos.GETcandidatoEmailRequest(email, login.body).then((candidato) => {
                metodos.DELETEfisicoEntrevistaRequest(email, login.body)
                metodos.DELETEfisicoCurriculoRequest(candidato.body.idCandidato, login.body)
                metodos.DELETEfisicoCandidatoRequest(candidato.body.idCandidato, login.body)
            })
        })
    });
})