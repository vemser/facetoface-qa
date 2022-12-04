/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

context('Login', () => {
    it('Validar login com sucesso', () => {
        loginPage.loginNoSistema();
        dashboardPage.validarNomeUser('Ályson');
    });

    it('Validar login com erro', () => {
        loginPage.loginNoSistemaComSenhaErrada();
    });

    it('Validar login sem preencher campos', () => {
        loginPage.loginNoSistemaSemPreencherCampos();
    });

    it('Validar login sem preencher campo senha', () => {
        loginPage.loginNoSistemaSemPreencherCampoSenha();
    });

    it('Validar login sem preencher campo user', () => {
        loginPage.loginNoSistemaSemPreencherCampoUser();
    });

    it('Validar redirecionamento esqueci minha senha', () => {
        loginPage.recoveryPassword();
    });
})
