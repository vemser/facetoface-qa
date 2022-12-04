/// <reference types="cypress" />

import DashboardPage from "../pages/DashboardPage"
const dashboardPage = new DashboardPage;

import LoginPage from "../pages/LoginPage"
const loginPage = new LoginPage;

const nome = 'Julio Rocha'


beforeEach(() => {
    loginPage.loginNoSistema();
})

context('Dashboard', () => {
    it('Busca candidato por nome', () => {
        dashboardPage.buscaCandidatoPorNome(nome)
    });

    it('Busca candidato por trilha', () => {
        dashboardPage.buscaCandidatoPorTilha()
    });

    it('Busca candidato por edicao', () => {
        dashboardPage.buscaCandidatoPorEdicao()
    });

    it('Busca candidato por trilha', () => {
        dashboardPage.buscaCandidatoPorEdicao()
    });

    it('edit perfil', () => {
        dashboardPage.editPerfilUserPage()

    });
})