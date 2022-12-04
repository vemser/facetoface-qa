/// <reference types="cypress" />

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import ChangePasswordPage from "../pages/ChancePasswordPage"
const changePasswordPage = new ChangePasswordPage;

beforeEach(() => {
    loginPage.loginNoSistema();
})

context('Troca de senha', () => {
    it('Validar troca de senha sem preencher campos', () => {
        dashboardPage.editPerfilUserPage();
        changePasswordPage.changePasswordPage();
        changePasswordPage.trocarSenhaSemPreencherCampos();
    });
})