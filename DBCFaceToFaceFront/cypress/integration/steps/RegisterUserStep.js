/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import RegisterUserPage from "../pages/RegisterUserPage"
const registerUserPage = new RegisterUserPage;

import Metodos from "../utils/Metodos"
const metodos = new Metodos;
let email = "pietro.bianchi@dbccompany.com.br"

beforeEach(() => {
    loginPage.loginNoSistema();
})

context('Registrar Usuario', () => {
    it('Validar criar usuario com sucesso', () => {
        dashboardPage.registerUserPage();
        registerUserPage.criarCandidatoCorretamente();
        metodos.Login().then((login) => {
            metodos.GETusuarioEmailRequest(email, login.body).then((usuario) => {
                metodos.DELETEfisicoUsuarioRequest(usuario.body.idUsuario, login.body)
            })
        })
    });

    it('Validar criar usuario sem preencher campos', () => {
        dashboardPage.registerUserPage();
        registerUserPage.criarCandidatoSemPreencherCampos();
    });
})
